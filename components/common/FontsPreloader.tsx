import { useEffect } from "react";

export default function FontsPreloader() {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "style";
    link.href =
      "https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap";
    link.onload = function () {
      this.rel = "stylesheet";
    };
    document.head.appendChild(link);

    // Fallback for no-JS environments would still be handled in HTML <noscript>
  }, []);

  return null;
}
