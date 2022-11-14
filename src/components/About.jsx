export default function About() {
  return (
    <div
      id="about"
      className="w-full h-screen bg-gradient-to-t from-gray-800 to-black text-white text-center"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-10 m-16">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis
          asperiores harum error voluptas vero earum perspiciatis quisquam nihil
          ratione sint deleniti explicabo, vitae voluptate maiores quo nam
          officia minima architecto.
        </p>
        <br />
        <p className="text-xl m-16">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          molestias reiciendis ex nam pariatur esse!
        </p>
      </div>
    </div>
  );
}
