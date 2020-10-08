export const query = (
  `query {
    slajderMoskitnyeSetkis {
      mini {
        url
      }
      big{
        url
      }
      text
      title
      price
    }
    slajderRaboty {
      img {
        url
      }
    }
    infoSteklopaketyMosSetki {
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
    steklopaketMosSetkaPrajs {
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