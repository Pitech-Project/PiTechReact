import React, { useRef, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import p5Types from "p5";
import type { Sketch } from "react-p5-wrapper";
import { CanvasContainer } from "@/styles/MUI/common.styled";

const ReactP5Wrapper = dynamic(
  () => import("react-p5-wrapper").then((mod) => mod.ReactP5Wrapper),
  { ssr: false },
);

interface DotImageAnimationProps {
  imageSrc: string;
  detailLevel?: number;
  minDotRadius?: number;
  maxDotRadius?: number;
  maxSpeed?: number;
  maxForce?: number;
  dotColor?: string;
  hoverColor?: string;
  fullHeight?: boolean;
}

const DotImageAnimation: React.FC<DotImageAnimationProps> = ({
  imageSrc,
  detailLevel = 12,
  minDotRadius = 0.1,
  maxDotRadius = 4,
  maxSpeed = 15,
  maxForce = 0.8,
  dotColor = "#F4F4F4",
  hoverColor = "#F7941E",
  fullHeight = false,
}) => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const [sketch, setSketch] = useState<Sketch | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const sketch: Sketch = (p: p5Types) => {
      let img: p5Types.Image;
      const dots: Dot[] = [];
      let canvasW: number;
      let canvasH: number;
      let imgLoaded = false;
      const mouse = { x: -1000, y: -1000 };

      class Dot {
        original: p5Types.Vector;
        pos: p5Types.Vector;
        vel: p5Types.Vector;
        acc: p5Types.Vector;
        radius: number;
        color: string;
        originalColor: string;
        maxspeed: number;
        maxforce: number;
        comfortZone: number;

        constructor(x: number, y: number, r: number, color: string) {
          const isMobile =
            typeof window !== "undefined" && window.innerWidth <= 991;
          this.original = p.createVector(x, y);
          this.pos = p.createVector(x, y);
          this.vel = p.createVector(0, 0);
          this.acc = p.createVector(0, 0);
          this.radius = r;
          this.color = color;
          this.originalColor = color;
          this.maxspeed = isMobile ? maxSpeed * 0.8 : maxSpeed;
          this.maxforce = isMobile ? maxForce * 1.5 : maxForce;
          this.comfortZone = 100;
        }

        behave() {
          const mouseVec = p.createVector(mouse.x, mouse.y);
          const d = p5Types.Vector.dist(this.pos, mouseVec);

          this.color = d < this.comfortZone ? hoverColor : this.originalColor;

          const target =
            d < this.comfortZone
              ? p5Types.Vector.sub(this.pos, mouseVec).add(this.pos)
              : this.original;
          this.seek(target);
        }

        seek(target: p5Types.Vector) {
          const desired = p5Types.Vector.sub(target, this.pos);
          const d = desired.mag();
          desired.setMag(
            d < 100 ? p.map(d, 0, 100, 0, this.maxspeed) : this.maxspeed,
          );
          const steer = p5Types.Vector.sub(desired, this.vel);
          steer.limit(this.maxforce);
          this.applyForce(steer);
        }

        applyForce(force: p5Types.Vector) {
          this.acc.add(force);
        }

        update() {
          this.vel.add(this.acc);
          this.vel.limit(this.maxspeed);
          this.pos.add(this.vel);
          this.acc.mult(0);
        }

        show() {
          p.noStroke();
          p.fill(this.color);
          p.circle(this.pos.x, this.pos.y, this.radius * 2);
        }
      }

      const buildDots = () => {
        dots.length = 0;

        // 🔥 Create offscreen graphics buffer
        const gfx = p.createGraphics(canvasW, canvasH);
        gfx.image(img, 0, 0, canvasW, canvasH);
        gfx.loadPixels();

        for (let y = 0; y < gfx.height; y += detailLevel) {
          for (let x = 0; x < gfx.width; x += detailLevel) {
            const index = (x + y * gfx.width) * 4;
            const r = gfx.pixels[index];
            const g = gfx.pixels[index + 1];
            const b = gfx.pixels[index + 2];
            const brightness = (r + g + b) / 3;
            const radius = p.map(brightness, 0, 255, 0, maxDotRadius);
            if (radius > minDotRadius) {
              dots.push(new Dot(x, y, radius, dotColor));
            }
          }
        }
      };

      p.preload = () => {
        img = p.loadImage(imageSrc, () => {
          imgLoaded = true;
        });
      };

      p.setup = () => {
        const container = canvasRef.current;
        if (!container) return;

        canvasW = container.offsetWidth;
        canvasH = fullHeight
          ? window.innerHeight
          : container.offsetHeight || window.innerHeight;

        const cnv = p.createCanvas(canvasW, canvasH);
        cnv.parent(container);
        p.pixelDensity(1);
        p.frameRate(30);

        // Wait until image fully loads
        const interval = setInterval(() => {
          if (imgLoaded) {
            buildDots();
            clearInterval(interval);
          }
        }, 50);
      };

      p.draw = () => {
        if (!imgLoaded) return; // hide until ready
        p.clear();
        for (const dot of dots) {
          dot.behave();
          dot.update();
          dot.show();
        }
      };

      p.mouseMoved = () => {
        mouse.x = p.mouseX;
        mouse.y = p.mouseY;
      };

      p.touchMoved = () => {
        mouse.x = p.mouseX;
        mouse.y = p.mouseY;
        return true;
      };

      p.touchEnded = () => {
        mouse.x = -1000;
        mouse.y = -1000;
      };

      p.windowResized = () => {
        const container = canvasRef.current;
        if (!container) return;

        canvasW = container.offsetWidth;
        canvasH = fullHeight
          ? window.innerHeight
          : container.offsetHeight || window.innerHeight;

        p.resizeCanvas(canvasW, canvasH);
        if (imgLoaded) buildDots();
      };
    };

    setSketch(() => sketch);
  }, [
    imageSrc,
    detailLevel,
    minDotRadius,
    maxDotRadius,
    maxSpeed,
    maxForce,
    dotColor,
    hoverColor,
    fullHeight,
  ]);

  if (!sketch) return null;

  return (
    <CanvasContainer ref={canvasRef}>
      <ReactP5Wrapper sketch={sketch} />
    </CanvasContainer>
  );
};

export default DotImageAnimation;
