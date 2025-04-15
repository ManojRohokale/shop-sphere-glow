import { TeamMember } from '@/components/TeamMember';

const teamMembers = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Founder & CEO',
    image: '/images/team/sarah.jpg',
    bio: 'With over 15 years of experience in the beauty industry, Sarah founded Shop Sphere Glow with a vision to create a premium beauty destination.',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Creative Director',
    image: '/images/team/michael.jpg',
    bio: 'Michael brings his expertise in design and branding to create our unique visual identity and product presentation.',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Product Curator',
    image: '/images/team/emily.jpg',
    bio: 'Emily carefully selects and tests each product to ensure it meets our high standards of quality and effectiveness.',
  },
];

const values = [
  {
    title: 'Quality First',
    description: 'We source only the finest products that meet our rigorous standards for quality and effectiveness.',
    icon: '✨',
  },
  {
    title: 'Customer Care',
    description: 'Your satisfaction is our priority. We provide exceptional service and support at every step.',
    icon: '❤️',
  },
  {
    title: 'Sustainability',
    description: 'We're committed to eco-friendly practices and sustainable packaging solutions.',
    icon: '🌱',
  },
  {
    title: 'Innovation',
    description: 'We constantly explore new trends and technologies to bring you the latest in beauty.',
    icon: '💡',
  },
];

export const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="relative h-[400px] rounded-lg overflow-hidden mb-12">
        <img
          src="/images/about/hero.jpg"
          alt="About Shop Sphere Glow"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-0 left-0 p-8 text-white">
          <h1 className="text-4xl font-bold mb-4">About Shop Sphere Glow</h1>
          <p className="text-lg max-w-2xl">
            We're passionate about bringing you the finest beauty products and creating
            an exceptional shopping experience.
          </p>
        </div>
      </div>

      {/* Our Story */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Our Story</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-lg mb-4">
              Founded in 2020, Shop Sphere Glow started as a small boutique with a big dream:
              to revolutionize the beauty shopping experience. Our journey began with a simple
              idea - to create a space where quality, innovation, and customer care come together.
            </p>
            <p className="text-lg">
              Today, we've grown into a trusted destination for beauty enthusiasts, offering
              carefully curated products from around the world. Our commitment to excellence
              and customer satisfaction remains at the heart of everything we do.
            </p>
          </div>
          <img
            src="/images/about/story.jpg"
            alt="Our Story"
            className="rounded-lg object-cover h-full"
          />
        </div>
      </section>

      {/* Our Values */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value) => (
            <div
              key={value.title}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Team */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <TeamMember key={member.id} {...member} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default About; 