
import axios from 'axios';
import { useState } from 'react';
import { useTranslation, Trans } from 'react-i18next';
const App = () => {

  const [user, setUser] = useState([]);
  const { t, i18n } = useTranslation();
  axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res => {

      setUser(res.data)
    })
    .catch(error => {
      console.log(error);
    })
  function change(data) {
    localStorage.setItem('lang', data)
    i18n.changeLanguage(data)
    console.log(data);
  }
  return (
    <div>
      {t('part1')}
      <button onClick={() => change('vi')}>vi</button>
      <button onClick={() => change('en')} > en</button>
      {user?.map(item => {
        return (
          <div className="a">
            {item.name}
          </div>
        )
      })}
    </div >
  )
}

export default App