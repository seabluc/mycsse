

import Link from 'next/link';


export default function Courses() {

  return (
    <div className="antialiased text-slate-500 bg-white">
      <div className="size-full flex overflow-auto">

        <div className="border-4 border-double p-2 flex flex-col items-center">
          <nav className="lg:text-sm lg:leading-6">
            <ul>
              <li>
                <h5 className="border-2 p-1 m-2 size-fit">Core</h5>
              </li>
              <li>
                <Link href="/courses/core">CSS342</Link>
              </li>
              <li>
                <h5 className="border-2 p-1 m-2 size-fit">Electives</h5>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex flex-col">
          <h1 className="text-center pt-4">mention what the CSSE degree is all about, provide links and watnot</h1>
          <h5 className="text-center pb-4 m-2">go over entire CSSE journey - mention prereqs/courses i took at edmonds college?
            this could be dedicated to a different tab in the navbar tho. should i just go over my time as a culinary student and y
            i even decided to pursue CS? ... this is a personal blog after all hmmm. this could all go into the 'about' section perhaps?
            if i do go with this, then i can mention how i was a sht student and retook several courses LOL tons of imposter syndrome</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Faucibus pulvinar elementum integer enim neque volutpat ac tincidunt vitae.
            Egestas maecenas pharetra convallis posuere morbi leo urna molestie at. Et egestas quis ipsum suspendisse ultrices gravida dictum.
            Nunc non blandit massa enim nec dui nunc. Ultrices gravida dictum fusce ut placerat. Interdum posuere lorem ipsum dolor sit.
            Eget nunc lobortis mattis aliquam faucibus purus in. Eu turpis egestas pretium aenean. Dignissim diam quis enim lobortis scelerisque fermentum.
            Convallis posuere morbi leo urna molestie at. Morbi quis commodo odio aenean sed. Arcu cursus euismod quis viverra nibh cras.
            Quis eleifend quam adipiscing vitae. Eget arcu dictum varius duis at. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit.
            Euismod lacinia at quis risus. Mauris a diam maecenas sed enim. <br />
            Vitae auctor eu augue ut lectus arcu bibendum at. Sed sed risus pretium quam vulputate dignissim suspendisse in est. Pellentesque habitant morbi tristique senectus.
            Pretium aenean pharetra magna ac placerat vestibulum lectus mauris. Donec ac odio tempor orci dapibus ultrices in.
            In nibh mauris cursus mattis molestie a. Netus et malesuada fames ac turpis egestas sed tempus urna. Gravida cum sociis natoque penatibus et magnis dis parturient.
            Adipiscing at in tellus integer feugiat scelerisque varius morbi. Amet tellus cras adipiscing enim eu turpis egestas pretium.
            Vel risus commodo viverra maecenas accumsan lacus vel facilisis volutpat. Dictum sit amet justo donec enim diam vulputate ut pharetra.
            Nisl rhoncus mattis rhoncus urna neque viverra justo nec. Bibendum at varius vel pharetra vel. Id diam maecenas ultricies mi eget mauris.
            Accumsan tortor posuere ac ut consequat semper viverra. Dignissim enim sit amet venenatis urna cursus. Erat velit scelerisque in dictum non.
            Ante in nibh mauris cursus mattis molestie a iaculis. Risus in hendrerit gravida rutrum quisque non tellus orci.
          </p>
        </div>
      </div>

      {/*
      <div className="flex flex-col size-1/2">
        <Link
          href="/courses/core"
          className="focus-within:bg-slate-500 hover:bg-slate-500 border-2 rounded-xl p-2"
        >Core
        </Link>
        <Link
          href="/courses/electives"
          className="focus-within:bg-slate-500 hover:bg-slate-500 border-2 rounded-xl p-2"
        >Electives
        </Link>
      </div>
      */}
    </div >
  )
}