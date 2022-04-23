import { useEffect, useRef } from "react";

export const Logo = (props: any) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    //Our first draw
    if (!context) return;
    context?.beginPath();
    context.fillStyle = "#000000";
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);
  }, []);

  return <canvas ref={canvasRef} {...props} />;
};
