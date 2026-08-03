import workExample1a from "@/assets/work-example-1a.png";
import workExample1b from "@/assets/work-example-1b.png";
import workExample3a from "@/assets/work-example-3a.png";
import workExample3b from "@/assets/work-example-3b.png";
import workExample3c from "@/assets/work-example-3c.png";
import workExample3d from "@/assets/work-example-3d.png";
import workExample4a from "@/assets/work-example-4a.png";
import workExample4b from "@/assets/work-example-4b.png";

export const WORK_POLISHING_VIDEO = "/video-polishing.mp4";
export const WORK_SLIDESHOW_INTERVAL_MS = 2000;

export type WorkExample = {
  id: string;
  alt: string;
  images?: readonly string[];
  video?: string;
};

export const WORK_EXAMPLES: readonly WorkExample[] = [
  {
    id: "work-1",
    images: [workExample1a, workExample1b],
    alt: "Porsche после детейлинга AMG",
  },
  {
    id: "work-2",
    video: WORK_POLISHING_VIDEO,
    alt: "Полировка кузова AMG Detailing",
  },
  {
    id: "work-3",
    images: [workExample3a, workExample3b, workExample3c, workExample3d],
    alt: "Mercedes G-Class после детейлинга AMG",
  },
  {
    id: "work-4",
    images: [workExample4a, workExample4b],
    alt: "Мотоциклы после детейлинга AMG",
  },
];
