import { useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  BookOpen,
  Leaf,
  Landmark,
  Users,
  Stethoscope,
  GraduationCap,
  Briefcase,
  Trees,
  Share2,
  Handshake,
} from "lucide-react";

const Section = ({ id, title, children, subtitle }: { id: string; title: string; subtitle?: string; children: React.ReactNode }) => (
  <section id={id} className="container mx-auto px-4 py-12 md:py-16 animate-fade-in">
    <header className="mb-6 md:mb-8">
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight font-gujarati text-primary">{title}</h2>
      {subtitle && (
        <p className="mt-2 text-muted-foreground font-gujarati text-base md:text-lg">{subtitle}</p>
      )}
    </header>
    {children}
  </section>
);

const Hero = () => (
  <header className="relative overflow-hidden">
    <div className="container mx-auto px-4 py-20 md:py-28 text-center">
      <div className="mx-auto max-w-4xl">
        <h1 className="font-gujarati text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-primary animate-enter">
          આર્ય ધ રોયલ્સ ફાઉન્ડેશન – અમદાવાદ
        </h1>
        <p className="mt-4 md:mt-6 font-gujarati text-2xl md:text-3xl text-primary/80 animate-fade-in">
          “સત્કર્મ એજ ધર્મ”
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <Badge className="font-gujarati text-base md:text-lg bg-primary text-primary-foreground hover-scale" variant="default">શિક્ષણ</Badge>
          <Badge className="font-gujarati text-base md:text-lg bg-secondary text-secondary-foreground hover-scale" variant="secondary">આરોગ્ય</Badge>
          <Badge className="font-gujarati text-base md:text-lg bg-accent text-accent-foreground hover-scale">રોજગાર</Badge>
        </div>
      </div>
    </div>
  </header>
);

const About = () => (
  <Section id="about" title="સંસ્થાપર્યય">
    <div className="grid md:grid-cols-2 gap-6 md:gap-10">
      <div>
        <p className="font-gujarati text-lg leading-8 text-foreground/90">
          અમદાવાદ શહેરમાં યુવાનો, વિદ્યાર્થીઓ અને સમાજપ્રેમી કાર્યકરોના સહકારથી જન્મેલી
          અમારી સેવા-યાત્રા એક સાદા વિચારથી શરૂ થઈ — સમાજને શિક્ષણ, આરોગ્ય અને
          માનવતાની દિશામાં સશક્ત બનાવવું. વર્ષોથી વિવિધ સામાજિક કાર્યક્રમોમાં જોડાયેલા
          સેવાભાવી મિત્રોએ મળીને સંસ્થાનું એક સુવ્યવસ્થિત રૂપ આપ્યું અને સતત પ્રયત્નો દ્વારા
          લોકો સુધી મદદ, માર્ગદર્શન અને અવસર પહોંચાડ્યા.
        </p>
        <p className="font-gujarati text-lg leading-8 mt-4 text-foreground/90">
          અમારી કામગીરીનું કેન્દ્ર શિક્ષણ સહાય, આરોગ્ય જનજાગૃતિ, કૌશલ્ય વિકાસ અને સાંસ્કૃતિક
          મૂલ્યોનું સંવર્ધન છે. “સેવા એ જીવન” ના મંત્ર સાથે, નિષ્ઠા અને પારદર્શિતાથી
          અમે અમારી દરેક પહેલ આગળ ધપાવીએ છીએ.
        </p>
      </div>
      <Card className="bg-card/70 backdrop-blur border-border/60 shadow-sm hover-scale">
        <CardContent className="p-6">
          <h3 className="font-gujarati text-2xl font-bold text-primary mb-3">અમારા મૂલ્યો</h3>
          <ul className="list-disc pl-5 space-y-2 font-gujarati text-foreground/90">
            <li>સહકાર, પારદર્શિતા અને સમર્પણ</li>
            <li>સમાવેશી વિકાસ અને સમાન અવસર</li>
            <li>પર્યાવરણ અને પરંપરા પ્રત્યે માન</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  </Section>
);

const Goals = () => {
  const items = useMemo(() => [
    { icon: BookOpen, title: "શૈક્ષણિક વિકાસ", desc: "ગામડાં-શહેરોમાં શિક્ષણનો પ્રસાર, સંશોધન પ્રોત્સાહન, નાનાં-મોટાં વિદ્યાસહાય અને માર્ગદર્શન." },
    { icon: Users, title: "સામાજિક અને સાંસ્કૃતિક સેવા", desc: "સાંસ્કૃતિક કાર્યક્રમો, સાહિત્ય-કલાને પ્રોત્સાહન અને યુવાઓમાં નેતૃત્વનું નિર્માણ." },
    { icon: Leaf, title: "પશુ-પંખી સેવા", desc: "પાંજરાપોળ, નિઃસ્વાર્થ સેવા, પાણી-ચારો અને જીવદયા પ્રવૃત્તિઓ." },
    { icon: Stethoscope, title: "આરોગ્ય અને માનવ સેવા", desc: "મેડિકલ કેમ્પ, રક્તદાન, માનસિક આરોગ્ય માટે કાઉન્સેલિંગ અને સહાય." },
    { icon: Landmark, title: "આપત્તિ સહાય અને તાલીમ", desc: "આપત્તિ સમયે તાત્કાલિક સહાય અને રિસ્પોન્સ ટીમની તાલીમ." },
    { icon: Briefcase, title: "રોજગાર અને કૌશલ્ય વિકાસ", desc: "વર્કશોપ્સ, કરિયર માર્ગદર્શન, ઉદ્યમિતા તાલીમ." },
    { icon: Trees, title: "ગામ વિકાસ અને પર્યાવરણ", desc: "વૃક્ષારોપણ, પાણી સંરક્ષણ, સ્વચ્છતા અભિયાન અને હરિત વિકાસ." },
    { icon: Share2, title: "સહકાર અને સંસાધન", desc: "સરકાર/સંસ્થાઓ સાથે સહકારથી પ્રોજેક્ટ મેનેજમેન્ટ અને અમલીકરણ." },
  ], []);

  return (
    <Section id="goals" title="આર્ય ધ રોયલ્સ ફાઉન્ડેશનના મુખ્ય હેતુઓ.">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map(({ icon: Icon, title, desc }) => (
          <Card key={title} className="border-border/60 bg-card/70 shadow-sm hover-scale">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-md bg-secondary text-secondary-foreground">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-gujarati text-xl font-bold text-primary">{title}</h3>
              </div>
              <p className="font-gujarati text-foreground/90">{desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
};

const Vision = () => (
  <Section id="vision" title="વિઝન" subtitle="સેવા, શિક્ષણ, આરોગ્ય, સાંસ્કૃતિક વિકાસ અને જીવનમૂલ્યો પર આધારિત સમૃદ્ધ સમાજ">
    <Card className="border-border/60 bg-card/70 shadow-sm">
      <CardContent className="p-6 space-y-4">
        <blockquote className="font-gujarati text-xl md:text-2xl text-primary leading-relaxed">
          "પરોપકારાય પુણ્યાય પાપાય પરપીડનમ્" — સનાતન ધર્મનો મર્મ
        </blockquote>
        <ul className="grid md:grid-cols-2 gap-3 font-gujarati">
          <li className="flex gap-2"><span>•</span> જ્યાં દરેકને સમાન અવસર, શિક્ષણ અને આરોગ્યની સુલભતા મળે.</li>
          <li className="flex gap-2"><span>•</span> જ્યાં માનવતા, પર્યાવરણ અને રાષ્ટ્રપ્રેમના મૂલ્યો જીવનમાત્રમાં જગ્યા પામે.</li>
          <li className="flex gap-2"><span>•</span> જ્યાં સેવા ભાવના શાંતિમય અને સમૃદ્ધ સમાજનું નિર્માણ કરે.</li>
          <li className="flex gap-2"><span>•</span> જ્યાં યુવાઓને કૌશલ્ય અને નેતૃત્વની તકો સરળતાથી ઉપલબ્ધ થાય.</li>
        </ul>
      </CardContent>
    </Card>
  </Section>
);

const Journey = () => {
  const steps = [
    {
      title: "જ્ઞાનસેતુ – શૈક્ષણિક સહાયના સંકલ્પો",
      detail: "વિદ્યાર્થીઓને માર્ગદર્શન, પુસ્તકો અને ફી સહાય, તથા કરિયર કાઉન્સેલિંગ કાર્યક્રમો.",
      icon: GraduationCap,
    },
    {
      title: "માનવતા સંગમ – આરોગ્ય અને સેવા",
      detail: "મેડિકલ કેમ્પ, રક્તદાન શિબિર અને આરોગ્ય જનજાગૃતિ સત્રો.",
      icon: Stethoscope,
    },
    {
      title: "પેઠી પ્રેરણા – ગ્રામ્ય યુવાનોનો ઉત્સવ",
      detail: "ગામોમાં પ્રતિભાશાળી યુવાઓ માટે સ્પર્ધાઓ, રમત-ગમત અને કૌશલ્ય વર્કશોપ્સ.",
      icon: Users,
    },
    {
      title: "સ્નેહમૃદુ – વિશિષ્ટ માનવતા",
      detail: "વૃદ્ધાશ્રમ/અનાથાશ્રમ મુલાકાતો, સહાય અને સાંસ્કૃતિક કાર્યક્રમો.",
      icon: Handshake,
    },
    {
      title: "વાણીવટિકા – જ્ઞાન અને સાહિત્ય પ્રોત્સાહન",
      detail: "ગ્રંથાલય અભિયાન, પુસ્તકદાન અને ગામડાંમાં વાંચન સંસ્કૃતિનું સંવર્ધન.",
      icon: BookOpen,
    },
  ];
  return (
    <Section id="journey" title="આર્ય ધ રોયલ ફાઉન્ડેશન – સેવા યાત્રા">
      <div className="grid md:grid-cols-2 gap-6">
        {steps.map((s) => (
          <Card key={s.title} className="border-border/60 bg-card/70 shadow-sm">
            <CardContent className="p-6 flex gap-4">
              <div className="p-2 h-10 w-10 rounded-md bg-secondary text-secondary-foreground flex items-center justify-center shrink-0">
                <s.icon className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-gujarati text-lg md:text-xl font-bold text-primary">{s.title}</h4>
                <p className="font-gujarati text-foreground/90 mt-1">{s.detail}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
};

const Trustees = () => (
  <Section id="trustees" title="ટ્રસ્ટીઓ અને માહિતી">
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <h3 className="font-gujarati text-2xl font-bold text-primary mb-3">ટ્રસ્ટીઓ</h3>
        <ul className="list-disc pl-5 space-y-2 font-gujarati">
          <li>પાયલ દવે – પ્રમુખ</li>
          <li>કુમાર વિવેકી – ઉપ પ્રમુખ</li>
          <li>કૈલાશ વિવેકી – મંત્રી</li>
          <li>હરી વિવેકી – ખજાનચી</li>
          <li>હેમલતા વિવેકી</li>
          <li>મનીષ દવે</li>
          <li>હિમાંશુ પુરોહિત</li>
        </ul>
      </div>
      <div>
        <h3 className="font-gujarati text-2xl font-bold text-primary mb-3">સંપર્ક</h3>
        <div className="space-y-2 font-gujarati">
          <p>મુખ્ય કચેરી: અમદાવાદ, ગુજરાત, ભારત</p>
          <p>સંપર્ક: 9099926324</p>
          <p>
            વેબસાઈટ: <a href="https://www.arytheroyals.blogspot.com" className="story-link" target="_blank" rel="noreferrer">www.arytheroyals.blogspot.com</a>
          </p>
          <p>સોશિયલ મીડિયા: Facebook / Instagram / Twitter</p>
        </div>
      </div>
    </div>
    <Separator className="my-8" />
    <p className="text-center font-gujarati text-sm text-muted-foreground">
      કૉપિરાઇટ © {new Date().getFullYear()} આર્ય ધ રોયલ્સ ફાઉન્ડેશન – અમદાવાદ
    </p>
  </Section>
);

const StructuredData = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'આર્ય ધ રોયલ્સ ફાઉન્ડેશન – અમદાવાદ',
    url: 'https://9badb018-feca-4195-9e06-d14fc0e61e99.lovableproject.com',
    description: 'શિક્ષણ, આરોગ્ય, રોજગાર અને સેવા માટે પ્રતિબદ્ધ સામાજિક સંસ્થા.',
    address: { '@type': 'PostalAddress', addressLocality: 'Ahmedabad', addressRegion: 'Gujarat', addressCountry: 'IN' },
    contactPoint: [{ '@type': 'ContactPoint', telephone: '+919099926324', contactType: 'customer service' }],
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
  );
};

const Index = () => {
  return (
    <main>
      <StructuredData />
      <Hero />
      <About />
      <Goals />
      <Vision />
      <Journey />
      <Trustees />
    </main>
  );
};

export default Index;
