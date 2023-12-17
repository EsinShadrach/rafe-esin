"use client";
import { BugIcon, Info } from "lucide-react";
import { useEffect, useState } from "react";

export function RenderBugs() {
  return (
    <div className="">
      <ClickableBugs />
    </div>
  );
}

function getRandomPosition() {
  const randomX = Math.random() * (window.innerWidth - 50); // Adjust 50 to the bug's width
  const randomY = Math.random() * (window.innerHeight - 50); // Adjust 50 to the bug's height
  return { x: randomX, y: randomY };
}

function ClickableBugs() {
  const [showTip, setShowTip] = useState(false);
  const [bugs, setBugs] = useState<{ x: number; y: number }[]>([]);

  useEffect(() => {
    setShowTip(true);
    const bugCount = 10;
    const bugsArray = Array.from({ length: bugCount }, () =>
      getRandomPosition()
    );
    setBugs(bugsArray);
  }, []);

  function removeBug(index: number) {
    const updatedBugs = [...bugs];
    updatedBugs.splice(index, 1);
    setBugs(updatedBugs);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      if (timer) {
        setShowTip(false);
      }
    }, 4000);

    () => clearTimeout(timer);
  }, [showTip]);

  return (
    <>
      {bugs.map((bug, index) => (
        <BugIcon
          key={index}
          style={{
            position: "absolute",
            top: `${bug.y}px`,
            left: `${bug.x}px`,
            transition: "transform 1s ease-in-out",
          }}
          onClick={() => removeBug(index)}
          className="-rotate-[20deg] bug-animation translate-y-20 opacity-0 text-red-500"
        />
      ))}
      {showTip && (
        <button
          onClick={() => setShowTip(false)}
          className="fixed inset-x-0 bottom-0 p-3"
        >
          <div className="flex items-center p-2 mx-auto text-sm bg-orange-300 w-fit gap-3 rounded-md">
            <Info />
            <div>
              <b>Pro Tip:</b> Click a bug to k*ll it
            </div>
          </div>
        </button>
      )}
    </>
  );
}
