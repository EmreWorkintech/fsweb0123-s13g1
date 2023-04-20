## 4. GÜN DERSTE YAPTIKLARIMIZ

- [ ] node uygulamamıza bilgi aktarabileceğimiz 2 yol gördük.
    - komut satırından uygulamamızı çalıştırırken bilgi aktarmak:
        - örn: `node index.js foo bar bazz`
        - bu verilere erişmek için uygulamamızda `process.argv` ile erişebiliyoruz. Bize array dönüyor ilk 2 element standart, sonrakiler bizim yolladıklarımız: örn: bar için `process.argv[3]`
    - environement variables'dan almak:
        - her sistemde farklı ortam değişkenleri önden tanımlı olarak var.
        - manuel eklemek de mümkün
        - veya uygulamamızı ayağa kaldırdığımız process'e env değişkenleri eklemek mümkün. Bunun için `dotenv` kullanabiliriz. 
            - `npm i dotenv` ile dependency olarak ekleyebiliriz.
            - `server.js` dosyamızın ilk satırlarına `require('dotenv').config()` ile çalıştırabiliriz.
            - root klasöründe `.env` dosyası oluşturup, değişkenler tanılayabiliriz. 
                - arada `=` kullanarak key-value ikilileri tanımlayabiliriz.
                - satır sonunda `;` kullanmıyoruz, dikkat!!! (enter yapmak yeterli)
                - genelde env değişkenlerini büyük harfle yazıyoruz. Örn: PORT, NODE_ENV
                

- [ ] express uygulamamızı web deployment'a hazır hale getirdik.
    - .gitignore dosyası ekledik: `npx gitignore node`
    - PORT bilgisini env'den aldık. `const port = process.env.PORT || 9000;`
    - package.json dosyasına start script'i ekledik: `"start": "node index.js"`
    - git'i initialize ettik. `git init``
        - github'da repo oluşturduk
        - projemize remote adres olarak bu repo adresini ekledik. `git remote add origin git@github.com:GITHUB_HESABINIZ/REPO_ADI.git`
        - kodlarımızı pushladık. 


- [ ] heroku'ya server'ımızı deploy ettik.
    - heroku'da oluşturuğumuz hesabımızda yeni bir app yarattık. `new app`
    - bu uygulamanın `Deploy` bölümünde `Deployment method` olarak GitHub'ı seçtik.
    - github hesabımızı bağladık ve server'ımızın reposunu arttık ve `Connect` ile bağladık.
    - `Automatic deploys` bölümünden ana branch'mizi seçtik ve `Enable Automatic Deploy`'u tıkladık.
    - ilk kurulum için `Manuel deploy` bölümünde ana branch'imizi deploy ettik.

- [ ] heroku cli'ı yükledik: `npm i -g heroku`
    - `heroku login` komutu ile login olduk.
    - uygulamamızın loglarını açtık. `heroku logs --app=UYGULAMA_ADI --tail`

- [ ] BONUS: heroku'ya heroku git ile deploy'u da öğrendik.
    - heroku.com'da uygulamamızın `Deploy` bölümünde `Deployment method` olarak `Heroku Git`'i seçtik.
    - kendi bilgisayarımızda, komut satırımızda (proje klasöründe iken) `heroku git:remote -a UYGULAMA_ADI` yazdık.
    - `git add .` ve `git commit -m "MESAJIMIZ"` sonrası `git push heroku main` ile komut satırından heroku git'e güncellemelerimizi pushladık. (Not: Github'ı da güncellemek için ayrıca `git push origin main` yapmamız gerekiyor.) 

        