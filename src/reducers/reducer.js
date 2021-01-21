import adidas from '../misc/shop-items/adidas-masks.jpg';
import assorted from '../misc/shop-items/assorted-masks.jpg';
import puma from '../misc/shop-items/puma-mask.jpg';
import ua from '../misc/shop-items/ua-mask.jpg';
import hummel from '../misc/shop-items/hummel-mask.jpg';
import looka from '../misc/shop-items/looka-mask.jpg';

export const reducer = (
  state = {
    cart: [],
    catalogue: {
      1: {
        name: 'Adidas Mask - White',
        id: 1,
        price: '30',
        image: <img src={adidas} alt='Adidas mask' />,
      },
      2: {
        name: 'Assorted Masks - 3 Pack',
        id: 2,
        price: '18',
        image: <img src={assorted} alt='Assorted mask' />,
      },
      3: {
        name: 'Puma Cloth Mask - Black',
        id: 3,
        price: '14',
        image: <img src={puma} alt='Puma mask' />,
      },
      4: {
        name: 'Under Armor Sports Mask - Black',
        id: 4,
        price: '20',
        image: <img src={ua} alt='UnderArmor mask' />,
      },
      5: {
        name: 'Hummel Mask - Pale Green',
        id: 5,
        price: '15',
        image: <img src={hummel} alt='Hummel mask' />,
      },
      6: {
        name: 'Looka Cloth Mask - Navy',
        id: 6,
        price: '17',
        image: <img src={looka} alt='Looka mask' />,
      },
    },
  },
  action
) => {
  switch (action.type) {
    case 'ADD_CART':
      return { ...state, cart: [...state.cart, action.payload] };

    case 'REMOVE_CART':
      return {
        ...state,
        cart: state.cart.filter(
          (cartItem) => cartItem.uniqueId !== action.payload
        ),
      };

    default:
      break;
  }

  return state;
};
