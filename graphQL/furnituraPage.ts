export const query = (
  `query {
    furnituras {
      img {
        url
      }
      text
      price
    }
    furnituraPrajs {
      img {
        url
      }
      title
      pre
      list {
        text
        price
      }
    }
  }`
)