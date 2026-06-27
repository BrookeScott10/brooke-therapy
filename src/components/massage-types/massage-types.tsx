import { Smile, Leaf, Dumbbell, Heart } from "lucide-react"

const massageTypes = [
  {
    icon: Smile,
    title: "SWEDISH MASSAGE",
    description:
      "A gentle, relaxing massage that improves circulation, relieves stress, and eases muscle tension.",
  },
  {
    icon: Leaf,
    title: "DEEP TISSUE MASSAGE",
    description:
      "Targets deeper muscle layers to release chronic tension, reduce pain, and improve mobility.",
  },
  {
    icon: Dumbbell,
    title: "SPORTS MASSAGE",
    description:
      "Designed to enhance athletic performance, prevent injuries, and speed up muscle recovery.",
  },
  {
    icon: Heart,
    title: "HOT STONE MASSAGE",
    description:
      "Heated stones combined with therapeutic massage to melt away tension and promote deep relaxation.",
  },
];

export default function MassageTypes() {
  return (
    <section className="py-16 bg-spa-beige">
      <div className="max-w-[1236px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {massageTypes.map((massage, index) => {
            const IconComponent = massage.icon
            return (
              <div key={index} className="text-center group cursor-pointer">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity">
                  <IconComponent className="w-10 h-10 text-spa-brown" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-lg text-spa-brown mb-2">{massage.title}</h3>
                <p className="text-sm text-spa-brown/70 leading-relaxed">{massage.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
