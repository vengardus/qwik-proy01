import { component$ } from '@builder.io/qwik';
import { QwikLogo } from '../../icons/qwik';
import styles from './navbar.module.css';
import { Link } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <header class={styles.header}>
      <div class={['container', styles.wrapper]}>
        <div class={styles.logo}>
          <Link href="/" >
            <QwikLogo height={50} width={143} />
          </Link>
        </div>
        <ul class="list-disc list-inside pl-1">
          <li>
            <Link href='/pokemons/list-serv/'>Serv-List</Link>
          </li>
          <li>
            <Link href='/pokemons/list-client/'>Client-List</Link>
          </li>
          <li>
            <Link href='/counter/'>Counter Hook</Link>
          </li>
          <li>
            <Link href='/login/'>Login</Link>
          </li>
          <li>
            <Link href='/dashboard/'>Dashboard</Link>
          </li>
        </ul>
      </div>
    </header>
  );
});
