interface ICreateOrderDTO {
  id?: string;
  user_id: string;
  item_description: string;
  item_quantity: number;
  item_price: number;
  total_value?: number;
}

export { ICreateOrderDTO };
