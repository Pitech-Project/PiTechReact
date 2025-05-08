import React, { useRef } from 'react';
import dynamic from 'next/dynamic';
import p5Types from 'p5';
import type { Sketch } from 'react-p5-wrapper';
import { Box } from '@mui/material';

// Prevent SSR issues
const ReactP5Wrapper = dynamic(() => import('react-p5-wrapper').then(mod => mod.ReactP5Wrapper), {
  ssr: false,
});

const CareerImgAnimation: React.FC = () => {
  const canvasParentRef = useRef<HTMLDivElement>(null);

  const sketch: Sketch = (p: p5Types) => {
    let img: p5Types.Image;
    let dots: Dot[] = [];
    const detailLevel = 7;
    const minDotRadius = 0.5;
    const maxDotRadius = 4;
    const dotColor = '#fff';
    const hoverColor = '#fff';
    let canvasW: number;
    let canvasH: number;
    let isMobile = false;

    let mouse = { x: -1000, y: -1000 };

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

      constructor(x: number, y: number, r: number, color: string, isMobile: boolean) {
        this.original = p.createVector(x, y);
        this.pos = p.createVector(x, y);
        this.vel = p.createVector(0, 0);
        this.acc = p.createVector(0, 0);
        this.radius = r;
        this.color = color;
        this.originalColor = color;

        this.maxspeed = isMobile ? 8 : 5;
        this.maxforce = isMobile ? 0.3 : 0.1;
        this.comfortZone = 100;
      }

      behave() {
        const mouseVec = p.createVector(mouse.x, mouse.y);
        const d = p5Types.Vector.dist(this.pos, mouseVec);

        if (d < this.comfortZone) {
          this.color = hoverColor;
          this.seek(p5Types.Vector.sub(this.pos, mouseVec).add(this.pos));
        } else {
          this.color = this.originalColor;
          this.seek(this.original);
        }
      }

      seek(target: p5Types.Vector) {
        const desired = p5Types.Vector.sub(target, this.pos);
        const d = desired.mag();
        if (d < 100) {
          desired.setMag(p.map(d, 0, 100, 0, this.maxspeed));
        } else {
          desired.setMag(this.maxspeed);
        }

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

    p.preload = () => {
      img = p.loadImage('https://i.postimg.cc/GhpSdRm9/bannerimage.png');
    };

    p.setup = () => {
      const container = canvasParentRef.current;
      if (!container) return;

      isMobile = typeof window !== 'undefined' && window.innerWidth <= 991;

      canvasW = container.offsetWidth;
      canvasH = window.innerHeight;

      const cnv = p.createCanvas(canvasW, canvasH);
      cnv.parent(container);

      p.pixelDensity(1);
      p.image(img, 0, 0, canvasW, canvasH);
      p.loadPixels();

      for (let y = 0; y < p.height; y += detailLevel) {
        for (let x = 0; x < p.width; x += detailLevel) {
          const index = (x + y * p.width) * 4;
          const r = p.pixels[index];
          const g = p.pixels[index + 1];
          const b = p.pixels[index + 2];
          const brightness = (r + g + b) / 3;
          const radius = p.map(brightness, 0, 255, 0, maxDotRadius);
          if (radius > minDotRadius) {
            dots.push(new Dot(x, y, radius, dotColor, isMobile));
          }
        }
      }
    };

    p.draw = () => {
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
      return false;
    };

    p.touchEnded = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };
  };

  return (
    <Box
      id="canvas-container"
      ref={canvasParentRef}
      sx={{
        width: '100%',
        height: {
          xs: '430px',
          xl: '100vh',
        },
        marginTop: '-45px',
        '& canvas': {
          height: {
            xs: '430px !important',
            xl: '100vh !important',
          },
        },
      }}
    >
      <ReactP5Wrapper sketch={sketch} />
    </Box>
  );
};

export default CareerImgAnimation;
