docker-compose run back rails new . --force --no-deps -d mysql --api

--
default: &default
adapter: mysql2
encoding: utf8
pool: <%= ENV.fetch('RAILS_MAX_THREADS') { 5 } %>
username: root
password: password
host: db

development:
<<: \*default
database: myapp_development

---

docker-compose build

--

docker-compose run front sh -c 'npx create-react-app front-app'

--

docker-compose up -d

--

docker-compose run back bundle exec rails db:create

---

---

docker-compose run front npm i @chakra-ui/react @emotion/react@^11 @emotion/styled@^11 framer-motion@^4

---

docker-compose run front yarn add @chakra-ui/react @emotion/react@^11 @emotion/styled@^11 framer-motion@^4
