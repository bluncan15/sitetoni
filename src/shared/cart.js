import { persistentAtom } from '@nanostores/persistent'
import { atom } from 'nanostores';

export const $cart = persistentAtom('cart', [], {
  encode: JSON.stringify,
  decode: JSON.parse,
});

export function addToCart(item) {
  let shouldAdd = true;
  $cart.get().map(c => {
    if (c._id === item._id &&
        c.color_type === item.color_type &&
        c.thickness === item.thickness &&
        c.color === item.color) {
      shouldAdd = false;
    }
  })

  if (shouldAdd) {
    $cart.set([...$cart.get(), item]);
  }
}

export function getCartItems() {
  return $cart.get()
}

export function removeFromCart(index) {
  $cart.set($cart.get().filter((_, i) => i != index));
}
