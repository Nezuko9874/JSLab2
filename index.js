const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'main.html'));
});

app.get('/bendik', (req, res) => {
    const user = {
        name: 'Ольга',
        last_name: 'Бендік',
        age: 19,
        pet: 'собачка і дві морські свинки',
        city: 'Київ',
        country: 'Україна',
        hobbies: ['Танці', 'Малювання', 'Гончарство'],
        books: ['Нехай ревуть воли, як ясла повні?', '1984', 'Віднесені вітром'],
        sport: ['Плавання', 'Настільний теніс', 'Бадмінтон'],
        languages: ['C', 'C#', 'C++', 'Python', 'JavaScript', 'Java']
    };

    res.render('pages/olha', { user });
});

app.get('/charnosh', (req, res) => {
    const user = {
        name: 'Надія',
        last_name: 'Чарнош',
        age: 18,
        city_naw: 'Київ',
        best_city:'Борислав',
        country: 'Україна',
        films: ['Острів проклятих','Темний лицар','Володар перснів'],
        languages: ['C', 'C#', 'SQL','MySGL', 'Python', 'JavaScript']
    };

    res.render('pages/nadia', { user });
});

app.get('/hryshchenko', (req, res) => {
    const user = {
      name: 'Олена',
      last_name: 'Грищенко',
      age: 19,
      city: 'Кривий Ріг',
      country: 'Україна',
      hobbies: ['Плавання', 'Танці', 'Кулінарія'],
      books: ['451 градус за Фаренгейтом', 'Портрет Доріана Грея', 'Таємнича пригода в Стайлзі'],
      sport: ['Біг', 'Великий теніс'],
      games: ['CS', 'Fortnite'],
      films: ['Острів проклятих', 'Spider-Man', 'Спліт']
    };
  
    res.render('pages/olena', { user });
  });

app.listen(process.env.PORT || 3001, () => {
    console.log("Server is running...");
});
