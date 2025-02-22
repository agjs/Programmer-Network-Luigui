import classNames from "classnames";

export const TIPTAP_TOOLBAR_ITEMS = {
  BOLD: "BOLD",
  ITALIC: "ITALIC",
  STRIKE_THROUGH: "STRIKE_THROUGH",
  CODE: "CODE",
  PARAGRAPH: "PARAGRAPH",
  HEADING_1: "HEADING_1",
  HEADING_2: "HEADING_2",
  HEADING_3: "HEADING_3",
  HEADING_4: "HEADING_4",
  HEADING_5: "HEADING_5",
  HEADING_6: "HEADING_6",
  UNORDERED_LIST: "UNORDERED_LIST",
  ORDERED_LIST: "ORDERED_LIST",
  LIST_ITEM: "LIST_ITEM",
  CODE_BLOCK: "CODE_BLOCK",
  BLOCK_QUOTE: "BLOCK_QUOTE",
  YOUTUBE: "YOUTUBE",
  LINK: "LINK",
  IMAGE: "IMAGE",
  TEXT_STYLE: "TEXT_STYLE",
  COLOR: "COLOR",
  MENTION: "MENTION",
  STRIKE: "STRIKE"
} as const;

export const typograyClassNames = {
  h1: (className?: string) =>
    classNames(
      "yl-text-3xl sm:yl-text-4xl md:yl-text-5xl yl-text-text yl-break-words yl-overflow-hidden yl-font-bold",
      className
    ),
  h2: (className?: string) =>
    classNames(
      "yl-text-2xl sm:yl-text-3xl md:yl-text-4xl yl-text-text yl-break-words yl-overflow-hidden yl-font-bold",
      className
    ),
  h3: (className?: string) =>
    classNames(
      "yl-text-xl sm:yl-text-2xl md:yl-text-3xl yl-text-text yl-break-words yl-overflow-hidden yl-font-bold",
      className
    ),
  h4: (className?: string) =>
    classNames(
      "text-lg sm:yl-text-xl md:yl-text-2xl yl-text-text yl-break-words yl-overflow-hidden yl-font-bold",
      className
    ),
  h5: (className?: string) =>
    classNames(
      "yl-text-md sm:yl-text-lg md:yl-text-xl yl-text-text yl-break-words yl-overflow-hidden yl-font-bold",
      className
    ),
  h6: (className?: string) =>
    classNames(
      "yl-text-sm sm:yl-text-md md:yl-text-lg yl-text-text yl-break-words yl-overflow-hidden yl-font-bold",
      className
    ),
  p: (className?: string) =>
    classNames(
      "yl-text-secondary yl-break-words yl-overflow-hidden",
      className
    ),
  a: (className?: string) =>
    classNames(
      "hover:yl-text-stroke yl-text-primary hover:yl-underline hover:yl-opacity-80 active:yl-opacity-50",
      className
    ),
  ul: (className?: string) =>
    classNames(
      "yl-list-disc yl-text-secondary marker:yl-text-primary marker:yl-text-xl yl-pl-4",
      className
    ),
  ol: (className?: string) =>
    classNames(
      "yl-list-decimal yl-text-secondary marker:yl-text-primary marker:yl-text-xl yl-pl-4",
      className
    )
};

export const toolbarItemToClassName = {
  [TIPTAP_TOOLBAR_ITEMS.HEADING_1]: {
    tagName: "h1",
    classes: typograyClassNames.h1("yl-my-4")
  },
  [TIPTAP_TOOLBAR_ITEMS.HEADING_2]: {
    tagName: "h2",
    classes: typograyClassNames.h2("yl-my-4")
  },
  [TIPTAP_TOOLBAR_ITEMS.HEADING_3]: {
    tagName: "h3",
    classes: typograyClassNames.h3("yl-my-4")
  },
  [TIPTAP_TOOLBAR_ITEMS.HEADING_4]: {
    tagName: "h4",
    classes: typograyClassNames.h4("yl-my-4")
  },
  [TIPTAP_TOOLBAR_ITEMS.HEADING_5]: {
    tagName: "h5",
    classes: typograyClassNames.h5("yl-my-4")
  },
  [TIPTAP_TOOLBAR_ITEMS.HEADING_6]: {
    tagName: "h6",
    classes: typograyClassNames.h6("yl-my-4")
  },
  [TIPTAP_TOOLBAR_ITEMS.PARAGRAPH]: {
    tagName: "p",
    classes: typograyClassNames.p("yl-my-4")
  },
  [TIPTAP_TOOLBAR_ITEMS.LINK]: {
    tagName: "a",
    classes: "yl-underline yl-text-text yl-cursor-pointer yl-font-bold"
  },
  [TIPTAP_TOOLBAR_ITEMS.UNORDERED_LIST]: {
    tagName: "ul",
    classes:
      "yl-list-disc yl-text-text marker:yl-text-text marker:yl-text-xl yl-pl-4"
  },
  [TIPTAP_TOOLBAR_ITEMS.ORDERED_LIST]: {
    tagName: "ol",
    classes:
      "yl-list-decimal yl-text-text marker:yl-text-text marker:yl-text-xl yl-pl-4"
  },
  [TIPTAP_TOOLBAR_ITEMS.YOUTUBE]: {
    tagName: null,
    classes: "yl-aspect-video yl-h-full yl-w-full yl-py-4"
  },
  [TIPTAP_TOOLBAR_ITEMS.IMAGE]: {
    tagName: "img",
    classes: "yl-mx-auto yl-block yl-p-2 yl-border yl-border-background"
  },
  [TIPTAP_TOOLBAR_ITEMS.MENTION]: {
    tagName: null,
    classes: "yl-text-text yl-cursor-pointer yl-font-bold"
  }
};
