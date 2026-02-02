export type Product = {
  name: string;
  text: string;
  imageSrc: string;
};

export type ProductInformation = {
  title: string;
  text: string;
};

export type ContactItem = {
  title: string;
  url?: string | null;
};

export type ContactSectionData = ContactItem[][];

export type RetailerLocation = {
  location: string;
  stores: string[];
};

export type MoodImage = {
  src: string;
  scale: { mobile: number; desktop: number };
  origin: { mobile: string; desktop: string };
  objectPosition?: { mobile: string; desktop: string };
};

export type Section =
  | {
      id: "header";
      data: string[];
    }
  | {
      id: "contact";
      data: ContactSectionData;
    }
  | {
      id: "products";
      data: Product[];
    }
  | {
      id: "instagram";
      data: { text: string; link: string };
    }
  | {
      id: "productInformation";
      data: ProductInformation[];
    }
  | {
      id: "retailers";
      data: RetailerLocation[];
    }
  | {
      id: "mood";
      data: { images: MoodImage[] };
    };

export type Data = {
  sections: Section[];
};
