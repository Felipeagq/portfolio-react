import Image from "next/image";

export default function AboutMe({ name, picture, about, children }) {
    const {src, width, height,alt} = picture
  return (
    <div className="text-center h-screen bg-stone-500 justify-center flex flex-col gap-y-8 items-center">
      <picture className="relative">
        <Image 
            src={src}
            width={width}
            height={height}
            alt={alt}
            className="rounded-full"
        />
        <div className="absolute bottom-0">
            <p className="text-white text-5xl font-bold">
                Hello!  
            </p>
        </div>
      </picture>

      <section>
        <p className="text-white text-3xl">
        My name is <span className="font-bold text-gray-700 text-5xl">{name}</span>
        </p>
      </section>

      <article className="max-w-lg text-gray-400 text-lg">
        <p>
            {about}
        </p>
      </article>

      <section>{children}</section>
    </div>
  );
}


AboutMe.defaultProps = {
    name:"Felipe Gonzalez",
    picture:{
        src : "/images/me.jpeg",
         width : 300,
         height : 300,
        alt : "profilePicture",
    },
    about :"FullStack en desarrollo con conocimiento en Python en backend usando las librerias de Django-RestFrameWork, docker, aws y react"
}