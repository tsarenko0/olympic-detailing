import workExample1a from "@/assets/work-example-1a.jpg";
import workExample1b from "@/assets/work-example-1b.jpg";
import workExample1c from "@/assets/work-example-1c.jpg";
import workExample1d from "@/assets/work-example-1d.jpg";
import workExample1e from "@/assets/work-example-1e.png";
import workExample2a from "@/assets/work-example-2a.jpg";
import workExample2b from "@/assets/work-example-2b.jpg";
import workExample2c from "@/assets/work-example-2c.png";
import workExample2d from "@/assets/work-example-2d.jpg";
import workExample2e from "@/assets/work-example-2e.jpg";
import workExample2f from "@/assets/work-example-2f.png";
import workExample2g from "@/assets/work-example-2g.png";
import workExample2h from "@/assets/work-example-2h.png";
import workExample3a from "@/assets/work-example-3a.jpg";
import workExample3b from "@/assets/work-example-3b.jpg";
import workExample3c from "@/assets/work-example-3c.jpg";
import workExample3d from "@/assets/work-example-3d.jpg";
import workExample3e from "@/assets/work-example-3e.png";
import workExample3f from "@/assets/work-example-3f.png";
import workExample3g from "@/assets/work-example-3g.jpg";
import workExample4a from "@/assets/work-example-4a.jpg";
import workExample4b from "@/assets/work-example-4b.jpg";
import workExample4c from "@/assets/work-example-4c.png";
import workExample4d from "@/assets/work-example-4d.png";
import workExample4e from "@/assets/work-example-4e.png";

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
    images: [workExample1a, workExample1b, workExample1c, workExample1d, workExample1e],
    alt: "Hyundai Palisade после детейлинга Olympic",
  },
  {
    id: "work-2",
    images: [
      workExample2a,
      workExample2b,
      workExample2c,
      workExample2d,
      workExample2e,
      workExample2f,
      workExample2g,
      workExample2h,
    ],
    alt: "BMW X7 после детейлинга Olympic",
  },
  {
    id: "work-3",
    images: [
      workExample3a,
      workExample3b,
      workExample3c,
      workExample3d,
      workExample3e,
      workExample3f,
      workExample3g,
    ],
    alt: "BMW 3 Series после детейлинга Olympic",
  },
  {
    id: "work-4",
    images: [workExample4a, workExample4b, workExample4c, workExample4d, workExample4e],
    alt: "Porsche Macan после детейлинга Olympic",
  },
];
