## 3. GÜN DERSTE YAPTIKLARIMIZ

- [ ] middleware'ları konuştuk:
    - 3 veya 4 argüman alan fonksiyonlar
        - (req,res,next)
        - (error, req, res, next) :error handler middleware
    - next() ile sonraki middleware'a geçiyoruz
    - next(err) ile(tek argüman ile cağırırsak, error handler middleware'e geçiyor.)
    - req ve res'te değişiklik yapabiliyor. Böylece sonraki middleware bu değişiklikleri kullanabilir.
    - sıralaması önemli dedik!


- [ ] 3 farklı tür middleware'i konuştuk:
    - Build-in middleware: Örn: express.json()
    - third-party middleware: Örn: morgan, cors, helmet
    - custom middleware: (kendi yazdıklarımız)


- [ ] middleware'leri nasıl kullanacağımızı konuştuk:
    - global olarak server.js dosyasında kullanabiliriz. 
    - routerların önüne koyabiliriz.
        - birden fazla olabilir, sırayla çalışır
        - örn: `server.use('/api/hobbits', md.passwordCheck, md.logger, hobbitsRouter);`
    - route'larımıza ekleyebiliriz
        - örn: `router.post('/', md.payloadNameCheck, md.payloadSurnameCheck, (req,res,next)=>{...`

- [ ] derste payload'da istediğimiz bilgiler var mı?, verilen id'li hobbit var mı? ve log alma için middleware'ler yazdık.


- [ ] NOT: dersin başında router içinde router'ı nested kukllanabileceğimizi konuştuk. bknz: hobbits-router:7

        