export const query = (
  `query {
    slajderGlavnayaStraniczas {
      bigimage {
        url
      }
      miniimage {
        url
      }
    }
    prajsGlavnayaStraniczas {
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
    infoGlavnayaStranicza {
      infoone {
        title text
        img {
          url
        }
      }
      infotwo {
        title text
        img {
          url
        }
      }
    }
  }`
)