const productList = [
  {
    id: 1,
    name: "Pedra da Lua",
    value: 79.9,
    imageUrl:
      "https://blog.victoriasayeg.com/wp-content/uploads/2022/02/diamante-azul-11012022.jpg.webp",
  },
  {
    id: 2,
    name: "Pedra de Marte",
    value: 79.9,
    imageUrl:
      "https://sgbeduca.cprm.gov.br/media/adultos/pedras_preciosas_semi2.jpg",
  },
  {
    id: 3,
    name: "Pedra de Plutão",
    value: 79.9,
    imageUrl:
      "https://thumbs.dreamstime.com/b/pedras-de-sil%C3%ADcio-puro-isoladas-em-fundo-preto-210233684.jpg",
  },
  {
    id: 4,
    name: "Pedra de Saturno",
    value: 79.9,
    imageUrl:
      "https://img.freepik.com/fotos-premium/mineral-de-ferro-isolado-em-fundo-preto-conceito-de-mineracao-e-pedra-para-uso-industrial_72932-2241.jpg",
  },
  {
    id: 5,
    name: "Pedra de Urano",
    value: 79.9,
    imageUrl:
      "https://img.myloview.com.br/adesivos/amostra-de-pedra-de-zeolita-em-preto-400-124799742.jpg",
  },
  {
    id: 6,
    name: "Pedra de Mercurio",
    value: 79.9,
    imageUrl:
      "https://img.freepik.com/fotos-premium/uma-pedra-de-ouro-esta-em-um-fundo-preto_808092-1851.jpg",
  },
  {
    id: 7,
    name: "Boneco de Et",
    value: 189.9,
    imageUrl:
      "https://media.istockphoto.com/id/646935276/pt/foto/alien-ovni.jpg?s=2048x2048&w=is&k=20&c=3mC5mrRBaLCYvGnAoEzShyKx2kCx42RzkRnyxodVI0w=",
  },
  {
    id: 8,
    name: "Foquete de brinqudo",
    value: 229.9,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDGCNu_ou2liN4bEnHeNfY-8eBD4s-whb_Xw&usqp=CAU",
  },
  {
    id: 9,
    name: "Globo Terrestre",
    value: 199.9,
    imageUrl:
      "https://photos.enjoei.com.br/globo-terrestre-decorativo-rose-81794351/828xN/czM6Ly9waG90b3MuZW5qb2VpLmNvbS5ici9wcm9kdWN0cy82NDc0OTk1LzlkM2FhMDM3YzExOGZkNDRkM2EzNDdjZDg1YTU1NTgxLmpwZw",
  },
  {
    id: 10,
    name: "Nave modelo Stock",
    value: 249.9,
    imageUrl:
      "https://thumbs.dreamstime.com/b/nave-espacial-isolada-no-fundo-preto-71329839.jpg",
  },
  {
    id: 11,
    name: "Nave Modelo Skull",
    value: 249.9,
    imageUrl:
      "https://www.papeldeparede.etc.br/fotos/wp-content/uploads/nave_de_star_wars.jpg",
  },
  {
    id: 12,
    name: "Nave Modelo Split",
    value: 800,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe5fNLcHVkcYRIBigKfOHnMdxIBihhCehUhwJ5pER4ixfzwJfqAsh1b_IEAB5hPR3rLfk&usqp=CAU",
  },
  {
    id: 13,
    name: "Traje espacial P",
    value: 499.9,
    imageUrl:
      "https://p2.trrsf.com/image/fget/cf/1200/630/middle/images.terra.com/2018/03/13/impactos-na-saude-dos-astronautas-podem-estar-ligados-ao-traje-espacial.jpg",
  },
  {
    id: 14,
    name: "Traje espacial M",
    value: 599.9,
    imageUrl:
      "https://p2.trrsf.com/image/fget/cf/1200/630/middle/images.terra.com/2018/03/13/impactos-na-saude-dos-astronautas-podem-estar-ligados-ao-traje-espacial.jpg",
  },
  {
    id: 15,
    name: "Traje espacial G",
    value: 699.9,
    imageUrl:
      "https://p2.trrsf.com/image/fget/cf/1200/630/middle/images.terra.com/2018/03/13/impactos-na-saude-dos-astronautas-podem-estar-ligados-ao-traje-espacial.jpg",
  },
  {
    id: 16,
    name: "Poster de Jupiter",
    value: 29.9,
    imageUrl:
      "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2023/02/jupiter_nasa.jpg",
  },
  {
    id: 17,
    name: "Poster de Marte",
    value: 29.9,
    imageUrl:
      "https://s1.static.brasilescola.uol.com.br/be/2021/11/planeta-marte.jpg",
  },
  {
    id: 18,
    name: "Poster de Saturno",
    value: 29.9,
    imageUrl:
      "https://services.meteored.com/img/article/lua-desgovernada-saiba-de-onde-vieram-os-aneis-de-saturno-1663445923144_1280.jpeg",
  },
  {
    id: 19,
    name: "Poster de Mercurio",
    value: 29.9,
    imageUrl:
      "https://img.olhardigital.com.br/wp-content/uploads/2019/09/20190911094506-1024x651.jpg",
  },
  {
    id: 20,
    name: "Poster de Urano",
    value: 29.9,
    imageUrl:
      "https://static.mundoeducacao.uol.com.br/mundoeducacao/2021/04/planeta-urano.jpg",
  },
  {
    id: 21,
    name: "Poster da Lua",
    value: 29.9,
    imageUrl:
      "https://classic.exame.com/wp-content/uploads/2020/07/GettyImages-1162816285.jpg?quality=70&strip=info&w=1024",
  },
  {
    id: 22,
    name: "Camiseta Lua",
    value: 59.9,
    imageUrl:
      "https://classic.exame.com/wp-content/uploads/2020/07/GettyImages-1162816285.jpg?quality=70&strip=info&w=1024",
  },
  {
    id: 23,
    name: "Camiseta Marte",
    value: 59.9,
    imageUrl:
      "https://images-americanas.b2w.io/produtos/3544131092/imagens/camiseta-feminina-blusa-tumblr-algodao-marte-planeta/3544131236_1_xlarge.jpg",
  },
  {
    id: 24,
    name: "Camiseta NASA",
    value: 59.9,
    imageUrl:
      "https://static3.tcdn.com.br/img/img_prod/460977/camiseta_nasa_branca_40101_1_20201211172541.jpg",
  },
  {
    id: 25,
    name: "Flores de Marte",
    value: 59.9,
    imageUrl:
      "https://s1.1zoom.me/big0/136/Chrysanthemums_Closeup_Black_background_Violet_570614_1280x1024.jpg",
  },
  {
    id: 26,
    name: "Flores de Plutão",
    value: 59.9,
    imageUrl:
      "https://thumbs.dreamstime.com/b/flores-cor-de-rosa-da-flor-do-gerbera-isoladas-no-fundo-preto-76041803.jpg",
  },
  {
    id: 27,
    name: "Flores de Saturno",
    value: 59.9,
    imageUrl:
      "https://onlinequadros.com.br/static/acc/artist/ART-13038/gallery/61181/ART-13038_dAMssMYutRjwPXn0zNDu.jpg",
  },
  {
    id: 28,
    name: "Flores de Urano",
    value: 59.9,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSycp-YeoU0Bo97y8OawmJXMUwzAIxZfMBs1e1pYlR1KXH-qsbXCg14Q2N73jCXoCAHkp4&usqp=CAU",
  },
  {
    id: 29,
    name: "Flores de Mercurio",
    value: 59.9,
    imageUrl:
      "https://onlinequadros.com.br/static/acc/artist/ART-25657/gallery/77451/ART-25657_qzubaPAgCDp7lWp7Qt1a.jpg",
  },
  {
    id: 30,
    name: "aaaaa",
    value: 59.9,
    imageUrl:
      "https://cdn.pixabay.com/photo/2017/02/15/07/56/flower-2067840_960_720.jpg",
  }]

export default productList;
