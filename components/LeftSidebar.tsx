"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { getShapeInfo } from "@/lib/utils";
import { Button } from "@/components/ui/button"; // Importing the Button component
import { fabric } from "fabric";

const LeftSidebar = ({ allShapes, canvasRef }: { allShapes: Array<any>, canvasRef: React.MutableRefObject<fabric.Canvas | null> }) => {

  const [selectedShapes, setSelectedShapes] = useState<any[]>([]);

  // Handle multi-select with Shift key
  const handleShapeClick = (shape: any, e: React.MouseEvent) => {
    if (e.shiftKey) {
      // If Shift is pressed, add the shape to the selection
      setSelectedShapes((prevSelected) => [...prevSelected, shape]);
    } else {
      // Otherwise, only select the clicked shape
      setSelectedShapes([shape]);
    }
  };

  // Group the selected shapes
  const handleGroupObjects = () => {
    if (selectedShapes.length > 1) {
      const canvas = canvasRef.current;
      const canvasObjects = selectedShapes.map((shape) => shape); // Access fabric objects from selected shapes
      const group = new fabric.Group(canvasObjects);
      canvas.add(group); // Add the group to the canvas
      canvas.renderAll(); // Re-render the canvas
      setSelectedShapes([]); // Clear the selection after grouping
    }
  };

  const memoizedShapes = useMemo(
    () => (
      <section className="flex flex-col border-t border-primary-grey-200 bg-primary-black text-primary-grey-300 min-w-[227px] sticky left-0 h-full max-sm:hidden select-none overflow-y-auto pb-20">
        <h3 className="border border-primary-grey-200 px-5 py-4 text-xs uppercase">Layers</h3>
        <div className="flex flex-col">
          {allShapes?.map((shape: any) => {
            const info = getShapeInfo(shape[1]?.type);

            return (
              <div
                key={shape[1]?.objectId}
                className={`group my-1 flex items-center gap-2 px-5 py-2.5 hover:cursor-pointer
                  ${selectedShapes.includes(shape) ? "bg-primary-green text-primary-black" : "hover:bg-primary-green hover:text-primary-black"}`}
                onClick={(e) => handleShapeClick(shape, e)} // Call the multi-select handler
              >
                <Image
                  src={info?.icon}
                  alt="Layer"
                  width={16}
                  height={16}
                  className="group-hover:invert"
                />
                <h3 className="text-sm font-semibold capitalize">{info.name}</h3>
              </div>
            );
          })}
        </div>
        {/* Add Group Button */}
        <Button
          onClick={handleGroupObjects}
          disabled={selectedShapes.length <= 1} // Disable if less than two objects are selected
          className={`mt-4 mx-auto w-40 py-2 ${selectedShapes.length > 1 ? "bg-primary-green" : "bg-gray-500"}`}
        >
          Group Selected
        </Button>
      </section>
    ),
    [allShapes?.length, selectedShapes]
  );

  return memoizedShapes;
};

export default LeftSidebar;
