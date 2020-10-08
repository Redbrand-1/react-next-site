export const query = (
  `query {
    slajderRaboty {
      img {
        url
      }
    }
    podokonnikiOtdelkas {
      title
        pre
        img {
          url
        }
        list {
          text
          price
        }
    }
  }`
)