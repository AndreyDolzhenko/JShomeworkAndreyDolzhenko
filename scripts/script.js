alert('Эта версия была обновлена в 2023 году');
//alert('Задание 1\nЗадать температуру в градусах по Цельсию. \nВывести в alert соответствующую температуру в градусах по Фаренгейту.');
var temperatureС = prompt('Введите температуру в градусах по Цельсию.\nПеред числом ОБЯЗАТЕЛЬНО поставьте + или -');
alert('Температура по Цельсию ' + ' ' + temperatureС);
var temperatureF = (9/5)*parseInt(temperatureС) + 32;
alert('Температура по Фаренгейту ' + ' ' + temperatureF);