export interface SliderInt {
  bigimage : {
    url: string
  }
  miniimage : {
    url: string
  }
}

export interface Price {
  img :{
    url: string
  }
  title: string
  pre: string
  list: [List]
}
interface List {
  id: number,
  text: string,
  price: string
}

export interface Info {
  infoone: {
    title: string
    text: string
    img: {
      url: string
    }
  }
  infotwo: {
    title: string
    text: string
    img: {
      url: string
    }
  }

}

export interface ListFur {
  img: {
    url: string
  } 
  text: string
  price: string
}

export interface Work {
  img: [{
    url: string
  }]
}

export interface SliderMS {
  mini: {
    url: string
  }
  big: {
    url: string
  }
  title: string
  text: string
  price: string
}

export interface imageMini {
  mini: string
  status: boolean
  color: string
}