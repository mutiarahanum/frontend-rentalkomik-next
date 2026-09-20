import { loginAction } from './actions';

function HalamanLogin() {
  return (
    <main>
      <h2>Masuk ke RentalKomik Mini</h2>

      <form action={loginAction}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            defaultValue="test@example.com"
            required
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            defaultValue="password"
            required
          />
        </div>

        <button type="submit">Masuk</button>
      </form>
    </main>
  );
}

export default HalamanLogin;