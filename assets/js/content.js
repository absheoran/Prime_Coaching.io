/*
 * ============================================================
 *  PRIME COACHING — CONTENT FILE
 *  This is the ONLY file you need to edit to add notes/videos.
 * ============================================================
 *
 *  HOW TO ADD LECTURE NOTES (PDF)
 *    1. Put the PDF in the matching folder, e.g.
 *         notes/class-10/quadratic-equations.pdf
 *    2. Add an entry to that chapter's `notes` list:
 *         notes: [
 *           { title: "Chapter notes", file: "notes/class-10/quadratic-equations.pdf" }
 *         ]
 *
 *  HOW TO ADD A VIDEO (YouTube)
 *    1. Upload the video to YouTube (Public or Unlisted).
 *    2. Copy the video ID — the part after "v=" in the link.
 *         https://www.youtube.com/watch?v=dQw4w9WgXcQ  ->  "dQw4w9WgXcQ"
 *    3. Add an entry to that chapter's `videos` list:
 *         videos: [
 *           { title: "Lecture 1 — Introduction", youtube: "dQw4w9WgXcQ" }
 *         ]
 *
 *  Chapters with no notes and no videos show as "Coming soon".
 *  Remember the commas between entries!
 */

const SITE = {
  name: "Prime Coaching",
  tagline: "Mathematics for Classes 9–12",
  email: "",        // e.g. "you@example.com" — leave "" to hide
  youtube: "",      // e.g. "https://www.youtube.com/@yourchannel" — leave "" to hide
  phone: ""         // e.g. "+91 98765 43210" — leave "" to hide
};

const CLASSES = {
  "9": {
    title: "Class 9",
    blurb: "Build strong foundations: number systems, algebra, and Euclidean geometry.",
    chapters: [
      { title: "Number Systems", notes: [], videos: [] },
      { title: "Polynomials", notes: [], videos: [] },
      { title: "Coordinate Geometry", notes: [], videos: [] },
      { title: "Linear Equations in Two Variables", notes: [], videos: [] },
      { title: "Introduction to Euclid's Geometry", notes: [], videos: [] },
      { title: "Lines and Angles", notes: [], videos: [] },
      { title: "Triangles", notes: [], videos: [] },
      { title: "Quadrilaterals", notes: [], videos: [] },
      { title: "Circles", notes: [], videos: [] },
      { title: "Heron's Formula", notes: [], videos: [] },
      { title: "Surface Areas and Volumes", notes: [], videos: [] },
      { title: "Statistics", notes: [], videos: [] }
    ]
  },

  "10": {
    title: "Class 10",
    blurb: "Board-exam ready: quadratics, trigonometry, coordinate geometry and more.",
    chapters: [
      { title: "Real Numbers", notes: [], videos: [] },
      { title: "Polynomials", notes: [], videos: [] },
      { title: "Pair of Linear Equations in Two Variables", notes: [], videos: [] },
      { title: "Quadratic Equations", notes: [], videos: [] },
      { title: "Arithmetic Progressions", notes: [], videos: [] },
      { title: "Triangles", notes: [], videos: [] },
      { title: "Coordinate Geometry", notes: [], videos: [] },
      { title: "Introduction to Trigonometry", notes: [], videos: [] },
      { title: "Some Applications of Trigonometry", notes: [], videos: [] },
      { title: "Circles", notes: [], videos: [] },
      { title: "Areas Related to Circles", notes: [], videos: [] },
      { title: "Surface Areas and Volumes", notes: [], videos: [] },
      { title: "Statistics", notes: [], videos: [] },
      { title: "Probability", notes: [], videos: [] }
    ]
  },

  "11": {
    title: "Class 11",
    blurb: "The bridge to higher maths: functions, sequences, conics, limits and derivatives.",
    chapters: [
      { title: "Sets", notes: [], videos: [] },
      { title: "Relations and Functions", notes: [], videos: [] },
      { title: "Trigonometric Functions", notes: [], videos: [] },
      { title: "Complex Numbers and Quadratic Equations", notes: [], videos: [] },
      { title: "Linear Inequalities", notes: [], videos: [] },
      { title: "Permutations and Combinations", notes: [], videos: [] },
      { title: "Binomial Theorem", notes: [], videos: [] },
      { title: "Sequences and Series", notes: [], videos: [] },
      { title: "Straight Lines", notes: [], videos: [] },
      { title: "Conic Sections", notes: [], videos: [] },
      { title: "Introduction to Three Dimensional Geometry", notes: [], videos: [] },
      { title: "Limits and Derivatives", notes: [], videos: [] },
      { title: "Statistics", notes: [], videos: [] },
      { title: "Probability", notes: [], videos: [] }
    ]
  },

  "12": {
    title: "Class 12",
    blurb: "Calculus, matrices, vectors and 3D geometry — for boards and entrance exams.",
    chapters: [
      { title: "Relations and Functions", notes: [], videos: [] },
      { title: "Inverse Trigonometric Functions", notes: [], videos: [] },
      { title: "Matrices", notes: [], videos: [] },
      { title: "Determinants", notes: [], videos: [] },
      { title: "Continuity and Differentiability", notes: [], videos: [] },
      { title: "Application of Derivatives", notes: [], videos: [] },
      { title: "Integrals", notes: [], videos: [] },
      { title: "Application of Integrals", notes: [], videos: [] },
      { title: "Differential Equations", notes: [], videos: [] },
      { title: "Vector Algebra", notes: [], videos: [] },
      { title: "Three Dimensional Geometry", notes: [], videos: [] },
      { title: "Linear Programming", notes: [], videos: [] },
      { title: "Probability", notes: [], videos: [] }
    ]
  }
};
