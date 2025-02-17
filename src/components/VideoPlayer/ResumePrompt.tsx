import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface ResumePromptProps {
  isOpen?: boolean;
  onResume?: () => void;
  onStartOver?: () => void;
  timestamp?: string;
  onOpenChange?: (open: boolean) => void;
}

const formatTimestamp = (timestamp: string) => {
  const time = parseInt(timestamp);
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
};

const ResumePrompt = ({
  isOpen = true,
  onResume = () => {},
  onStartOver = () => {},
  timestamp = "120",
  onOpenChange = () => {},
}: ResumePromptProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="bg-zinc-900 text-white sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Resume Playback</DialogTitle>
          <DialogDescription className="text-zinc-400">
            Would you like to resume from {formatTimestamp(timestamp)}?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex gap-2">
          <Button
            variant="outline"
            onClick={onStartOver}
            className="bg-zinc-800 text-white hover:bg-zinc-700"
          >
            Start Over
          </Button>
          <Button
            onClick={onResume}
            className="bg-blue-600 text-white hover:bg-blue-700"
          >
            Resume
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ResumePrompt;
