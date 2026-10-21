// Centralized image references for demo projects. All from Pexels (license-free).

export const projectImages = {
  luxora: {
    hero: "https://images.pexels.com/photos/20177238/pexels-photo-20177238.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200",
    editorial: "https://images.pexels.com/photos/15067554/pexels-photo-15067554.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200",
    lookbook: "https://images.pexels.com/photos/15067553/pexels-photo-15067553.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200",
    campaign: "https://images.pexels.com/photos/19665963/pexels-photo-19665963.png?auto=compress&cs=tinysrgb&h=900&w=1200",
  },
  noirFrame: {
    hero: "https://images.pexels.com/photos/8410751/pexels-photo-8410751.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200",
    gallery1: "https://images.pexels.com/photos/9016971/pexels-photo-9016971.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200",
    gallery2: "https://images.pexels.com/photos/6480785/pexels-photo-6480785.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200",
  },
  atelier: {
    hero: "https://images.pexels.com/photos/4884116/pexels-photo-4884116.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200",
    workspace: "https://images.pexels.com/photos/131187/pexels-photo-131187.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200",
    flatlay: "https://images.pexels.com/photos/6662/creative-smartphone-notebook-typography.jpg?auto=compress&cs=tinysrgb&h=900&w=1200",
  },
  novaDigital: {
    hero: "https://images.pexels.com/photos/6805152/pexels-photo-6805152.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200",
    team: "https://images.pexels.com/photos/1181461/pexels-photo-1181461.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200",
    meeting: "https://images.pexels.com/photos/6805161/pexels-photo-6805161.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200",
  },
  havenEstates: {
    hero: "https://images.pexels.com/photos/740587/pexels-photo-740587.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200",
    villa: "https://images.pexels.com/photos/7031622/pexels-photo-7031622.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200",
    modern: "https://images.pexels.com/photos/36025719/pexels-photo-36025719.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200",
  },
  aurelSkin: {
    hero: "https://images.pexels.com/photos/8015777/pexels-photo-8015777.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200",
    products: "https://images.pexels.com/photos/7691160/pexels-photo-7691160.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200",
    bottles: "https://images.pexels.com/photos/8101525/pexels-photo-8101525.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200",
  },
  arluxe: {
    mechanism: "https://images.pexels.com/photos/2535386/pexels-photo-2535386.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200",
    gears: "https://images.pexels.com/photos/34149486/pexels-photo-34149486.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200",
    craft: "https://images.pexels.com/photos/32942760/pexels-photo-32942760.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200",
    skeleton: "https://images.pexels.com/photos/39654988/pexels-photo-39654988.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200",
    productOne: "https://images.pexels.com/photos/8839887/pexels-photo-8839887.jpeg?auto=compress&cs=tinysrgb&h=1000&w=1000",
    productTwo: "https://images.pexels.com/photos/28977357/pexels-photo-28977357.jpeg?auto=compress&cs=tinysrgb&h=1000&w=1000",
    productThree: "https://images.pexels.com/photos/6157411/pexels-photo-6157411.jpeg?auto=compress&cs=tinysrgb&h=1000&w=1000",
  },
};

// Preview thumbnails for project cards — high-quality real imagery.
export const projectPreviews: Record<string, string> = {
  arluxe: "https://images.pexels.com/photos/8839887/pexels-photo-8839887.jpeg?auto=compress&cs=tinysrgb&h=700&w=700",
  luxora: projectImages.luxora.hero,
  "noir-frame": projectImages.noirFrame.hero,
  atelier: projectImages.atelier.workspace,
  "nova-digital": projectImages.novaDigital.hero,
  "haven-estates": projectImages.havenEstates.hero,
  "aurel-skin": projectImages.aurelSkin.hero,
};
