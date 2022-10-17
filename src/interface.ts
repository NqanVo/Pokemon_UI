export interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  stats: [
    {
      base_stat: number;
      stat: {
        name: string;
      };
    }
  ];
  types: [
    {
      type: {
        name: string;
      };
    }
  ];
  sprites: {
    front_default: string;
    other: {
      dream_world: {
        front_default: string;
      };
    };
  };
  flavor_text_entries?: [
    {
      flavor_text: string;
    }
  ];
}
