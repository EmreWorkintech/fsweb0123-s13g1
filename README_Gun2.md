## 2. GÜN DERSTE YAPTIKLARIMIZ

- [ ] route'lar oluşturduk. Method(GET, POST, PUT, DELETE) ve Path(örn: '/hobbits') 2'lileri kullanarak endpointler oluşturduk.
- [ ] endpointlere parametre aktarma yöntemlerini konuştuk.
    - 3 yöntem var
        - [ ] Route Params: 
            - route'da `:` kullanarak tanımlıyoruz. 
            - `req.params.{param_name}` ile erişiyoruz. 
            - (Örn: 'hobbits/:id' => req.params.id)
            - her değer string olarak tanımlanıyor!
                - örn: 'hobbits/2'  =>  id = "2"
        - [ ] Query String: URL'de:
            - ? sonrasında key-value ikilileri olarak tanımlıyoruz.
                - örn: https://workintech.com.tr?name=emre   =>  `name="emre"`
            - birden fazla varsa araya & koyuyoruz
                - örn: https://workintech.com.tr?name=emre&surname=sahiner
            - aynı key'den 1'den fazla varsa. array olarak alıyoruz.
                - örn: https://workintech.com.tr?name=emre&name=erdem    =>  `name=["emre", "erdem"]`
            - Büyük küçük harf duyarlı
                - örn: https://workintech.com.tr?Name=emre&name=erdem    => `name= "erdem", Name="emre"`
            - r`eq.query.{key}` ile erişebiliyoruz.
        - [ ] Request Body:
            - `req.body` ile erişiyoruz.
            - server.js'de express'in json middleware'ini eklememiz gerekiyor! `server.use(express.json())`
- [ ] kodumuzu sadeleştirmek için express'in `Router()` özelliğini kullanıyoruz.
- [ ] REST mimari stilini konuştuk:
    - client-server
    - unified interface
    - layered
    - stateless
    - cacheable
    - code on demand

        