import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <header>
        <div>
          <h1 className='h'>Start Bootstrap</h1>
        </div>
        <div>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li className='oc'>Blog</li>
          </ul>
        </div>
      </header>
      <section className='s1'>
        <div>
          <h1 className='h1'>Welcome to Blog Home!</h1>
          <p>A Bootstrap 5 starter layout for your next blog homepage</p>
        </div>
      </section>
      <section className='s2'>
        <img className='img1' src='https://dummyimage.com/850x350/dee2e6/6c757d.jpg' alt='' />
        <div>
          <div>
            January 1, 2023
          </div>
          <h2>Featured Post Title</h2>
          <p className='cart-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!</p>
          <button> <a href='#' className='btn btn-primary'>Read more →</a></button>
        </div>
      </section>

      <section className='s3'>
        <div className='box1'>
          <img className='img2' src='https://dummyimage.com/850x350/dee2e6/6c757d.jpg' alt='' />
          <div>
            <div>
              January 1, 2023
            </div>
            <h2>Featured Post Title</h2>
            <p className='cart-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!</p>
            <button> <a href='#' className='btn btn-primary'>Read more →</a></button>
          </div>
        </div>
        <div className='box1'>
          <img className='img2' src='https://dummyimage.com/850x350/dee2e6/6c757d.jpg' alt='' />
          <div>
            <div>
              January 1, 2023
            </div>
            <h2>Featured Post Title</h2>
            <p className='cart-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!</p>
            <button> <a href='#' className='btn btn-primary'>Read more →</a></button>
          </div>
        </div>
      </section>

      <br />
      <br />
      <br />

      <section className='s4'>
        <div className='box1'>
          <img className='img2' src='https://dummyimage.com/850x350/dee2e6/6c757d.jpg' alt='' />
          <div>
            <div>
              January 1, 2023
            </div>
            <h2>Featured Post Title</h2>
            <p className='cart-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!</p>
            <button> <a href='#' className='btn btn-primary'>Read more →</a></button>
          </div>
        </div>
        <div className='box1'>
          <img className='img2' src='https://dummyimage.com/850x350/dee2e6/6c757d.jpg' alt='' />
          <div>
            <div>
              January 1, 2023
            </div>
            <h2>Featured Post Title</h2>
            <p className='cart-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!</p>
            <button> <a href='#' className='btn btn-primary'>Read more →</a></button>
          </div>
        </div>
      </section>

    </div>
  );
}

export default App;
