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

const Section = ({
  id,
  title,
  children,
  subtitle,
}: {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) => (
  <section
    id={id}
    className="container mx-auto px-4 py-12 md:py-16 animate-fade-in"
  >
    <div className="rounded-2xl border border-green-600 bg-secondary/30 p-6 md:p-8">
      <header className="mb-6 md:mb-8">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight font-gujarati text-primary">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-2 text-muted-foreground font-gujarati text-base md:text-lg">
            {subtitle}
          </p>
        )}
      </header>
      {children}
    </div>
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
      </div>
    </div>
  </header>
);

const About = () => ( 
  <Section id="about" title="સંસ્થાપરિચય">
    <div className="grid md:grid-cols-2 gap-6 md:gap-10">
      <div>
        <p className="font-gujarati text-base md:text-xl leading-8 text-foreground/90">
          આજથી પંદર વર્ષ પહેલાં, અમદાવાદના પાલડી વિસ્તારમાં સ્થિત અખિલ ભારતીય
          શ્રીમાળી બ્રાહ્મણ સમાજ કેળવણી મંડળ સંચાલિત છાત્રાલયમાં અભ્યાસ કરતાં છ
          પ્રતિભાશાળી વિદ્યાર્થીઓના મનમાં એક વિચારના બીજ વાવાયા. ગુજરાતના
          દુરદરાજ ગામડાઓમાંથી શિક્ષણ માટે અમદાવાદ આવતાં અનેક વિદ્યાર્થીઓ આર્થિક
          મુશ્કેલીઓનો સામનો કરતા હતા. ઉપરાંત, આરોગ્યની દૃષ્ટિએ અમદાવાદ રાજ્યનું
          એક મહત્વપૂર્ણ કેન્દ્ર હોવાને કારણે, અહીં આવતા લોકોને આરોગ્યસેવાઓની
          જરૂરિયાત પણ ઘણી અનુભવાતી.
        </p>
        <p className="font-gujarati text-base md:text-xl mt-10 leading-8 text-foreground/90">
          આ છ યુવાનો હૃદયથી સેવા ભાવના ધરાવતા હતાં. તેઓ કોઈ ઔપચારિક ટ્રસ્ટ વિના,
          નિઃસ્વાર્થ સેવા કાર્યોમાં જોડાયેલા હતા. ક્યારેક અભ્યાસ સામગ્રી
          પહોંચાડવી, ક્યારેક સારવાર માટે માર્ગદર્શન આપવું, તો ક્યારેક સહાયના
          હાથે કોઈ અજાણ્યા માટે દીવો પ્રગટાવવો – એમ તેઓ સેવા રૂપે જીવન જીવતા
          હતા. પરંતુ, સેવા પ્રવૃત્તિઓને વધુ વ્યાપક અને સુવ્યવસ્થિત બનાવવા માટે,
          તેમણે આ ભાવનાને એક સત્તાવાર સ્વરૂપ આપવાનું નક્કી કર્યું. સેવા સપનાઓને
          હકીકતમાં ઉતારવા માટે તેમણે એક ઔપચારિક ટ્રસ્ટની રચના કરી.
        </p>
      </div>
      <Card className="border bg-card/70 backdrop-blur border-border/60 shadow-sm hover-scale">
        <CardContent className="p-6">
          <h3 className="font-gujarati text-2xl font-bold text-primary mb-3">
            અમારા મૂલ્યો
          </h3>
          <p className="list-disc pl-5 space-y-2 text-base md:text-xl font-gujarati text-foreground/90">
            આ રીતે વર્ષ 2011માં કાર્યકર રોયલ ફાઉન્ડેશનનો જન્મ થયો – એક એવું
            સ્વપ્ન, જે નિષ્ઠા, સમર્પણ અને માનવસેવાના સુગંધિત બીજથી પોષાયું. આજે,
            આ ફાઉન્ડેશન માત્ર સેવા સંસ્થા જ નહીં, પરંતુ સમાજના દરેક વર્ગને
            સ્પર્શતું એક પ્રેરણાસ્રોત બની ગયું છે — જ્યાં શિક્ષણ, આરોગ્ય,
            સાંસ્કૃતિક વિકાસ, જીવદયા, પર્યાવરણ સંરક્ષણ અને માનવતા એક મંચ પર આવે
            છે.
          </p>
        </CardContent>
      </Card>
    </div>
  </Section>
);

const Goals = () => {
  const items = useMemo(
    () => [
      {
        icon: BookOpen,
        title: "શૈક્ષણિક વિકાસ",
        desc: "ગામડાં, શહેરો અને પછાત વિસ્તારોમાં શિક્ષણનો પ્રસાર કરવો, સંશોધનને પ્રોત્સાહન આપવું, શાળા-મહાવિદ્યાલય, છાત્રાલય અને અભ્યાસગૃહની સ્થાપના કરવી તેમજ ગરીબ અને પ્રતિભાશાળી વિદ્યાર્થીઓને પાઠ્યપુસ્તકો અને આર્થિક સહાય પૂરી પાડવી.",
      },
      {
        icon: Users,
        title: "સામાજિક અને સાંસ્કૃતિક સેવા",
        desc: "સાંસ્કૃતિક કાર્યક્રમો. સંગીત-નાટક, પ્રવાસો અને તહેવારોનું આયોજન કરવું; કુપ્રથાઓ અને અંધશ્રદ્ધા દૂર કરવા માટે પ્રવચનો તથા સભાઓ યોજવી; રાષ્ટ્રીય પ્રસંગોની ઉજવણી કરવી અને યુવાનોમાં નેતૃત્વ તથા રાષ્ટ્રપ્રેમ જગાવવો.",
      },
      {
        icon: Leaf,
        title: "પશુ-પંખી સેવા",
        desc: "પાંજરાપોળ અને ગોશાળાઓ સ્થાપવી; નિ:સહાય પશુ-પક્ષીઓને ખોરાક, પાણી અને સારવાર પૂરી પાડવી તથા જીવદયા પ્રવૃત્તિઓ કરવી.",
      },
      {
        icon: Stethoscope,
        title: "આરોગ્ય અને માનવ સેવા",
        desc: "મેડિકલ કેમ્પ, રક્તદાન અને નેત્રદાન શિબિરોનું આયોજન કરવું; ગરીબોને ભોજન, દવા અને આરોગ્યસેવાઓ પૂરી પાડવી; દવાખાનાઓ ચલાવવા તથા અંધ, અપંગ, અનાથ અને માનસિક અશક્ત લોકો માટે કલ્યાણકારી પ્રવૃત્તિઓ કરવી.",
      },
      {
        icon: Landmark,
        title: "આપત્તિ સહાય અને તાલીમ",
        desc: "કુદરતી કે માનવસર્જિત આપત્તિના સમયમાં બચાવ કાર્ય, અસરગ્રસ્તોને તાત્કાલિક સહાય અને આવા સંજોગોમાં જરૂરી તાલીમની વ્યવસ્થા કરવી.",
      },
      {
        icon: Briefcase,
        title: "રોજગાર અને કૌશલ્ય વિકાસ",
        desc: "બેરોજગાર યુવક-યુવતીઓને રોજગારીના અવસર પૂરા પાડવા પ્રયાસો કરવા; મહિલાઓ માટે કૌશલ્ય અને સ્વરોજગાર તાલીમ કેન્દ્રો ચલાવવા.",
      },
      {
        icon: Trees,
        title: "ગામ વિકાસ અને પર્યાવરણ",
        desc: "ગ્રામ્ય સુધારણા, પાણીના પ્રોજેક્ટો, સરકાર અને બેંકોની સહાયથી વિકાસ યોજનાઓ અમલમાં મૂકવી; તેમજ બિનપરંપરાગત ઊર્જા સ્ત્રોતોનો વિકાસ અને તે અંગે જાગૃતિ ફેલાવવી.",
      },
      {
        icon: Share2,
        title: "સહકાર અને સંસાધન",
        desc: "સરકારી, સહકારી સંસ્થાઓ અને દાતાઓ પાસેથી સહકાર તથા ભંડોળ મેળવી સંસ્થાના હેતુઓ સિદ્ધ કરવા માટે જરૂરી પ્રવૃત્તિઓ કરવી.",
      },
    ],
    []
  );

  return (
    <Section id="goals" title="આર્ય ધ રોયલ્સ ફાઉન્ડેશનના મુખ્ય હેતુઓ.">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map(({ icon: Icon, title, desc }) => (
          <Card
            key={title}
            className="border border-green-500 bg-card/70 shadow-sm hover-scale"
          >
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-md bg-secondary text-secondary-foreground">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-gujarati text-xl font-bold text-primary">
                  {title}
                </h3>
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
  <Section id="vision" title="વિઝન">
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <div className="border-l-[3px] border-green-700 pl-5 text-base md:text-lg">
          <p className="font-bold">
            "परार्थे प्राणसंयासः परार्थे त्याग आर्थिनाम्।
          </p>
          <p className="font-bold pl-3 pt-3">
            परार्थे पीडनं चैव सतां धर्मः सनातनः ॥"
          </p>
          <p className="pt-3 font-gujarati">
            (पद्म पुराण, उत्तर खंड, અધ્યાય 193, શ્લોક 3)
          </p>
          <p className="pt-3 font-gujarati">
            (સત્પુરુષોનો શાશ્વત ધર્મ એ છે કે તેઓ પરોપકાર માટે પોતાના પ્રાણ, ધન
            અને શ્રમનો ત્યાગ કરે, અને જરૂરિયાતમંદોની મદદ કરે)
          </p>
        </div>
        <div className="mt-8">

          <h2 className="font-gujarati text-xl">અમારું વિઝન: સેવા, શિક્ષણ, આરોગ્ય, સાંસ્કૃતિક વિકાસ, જીવદયા અને ગ્રામ્ય પ્રગતિ દ્વારા એવો સમાજ સર્જવો:</h2>
            
          <ul className="font-gujarati list-disc text-base md:text-xl space-y-2 pl-9 pt-2">
            <li>જ્યાં દરેકને ભેદભાવ વિના શિક્ષણ, રોજગાર અને આરોગ્યની સમાન તક મળે.</li>
            <li>જ્યાં માનવીય મૂલ્યો, રાષ્ટ્રપ્રેમ અને પર્યાવરણ પ્રત્યેની જવાબદારી વિકસે.</li>
            <li>યાં સેવા ભાવના દરેકના જીવનનું કેન્દ્ર બને અને સુખ, શાંતિ તથા સમાનતાથી ભરેલો સમાજ નિર્માણ થાય</li>જ્યાં સેવા ભાવના દરેકના જીવનનું કેન્દ્ર બને અને સુખ, શાંતિ તથા સમાનતાથી ભરેલો સમાજ નિર્માણ થાય
          </ul>
        
        </div>
      </div>
      <div className="border border-red-500">
        <p>Image Section</p>
      </div>
    </div>
  </Section>
);

const Journey = () => {
  const steps = [
    {
      title: "જ્ઞાનસેતુ – શૈક્ષણિક સહાયના સંકલ્પો",
      detail:
        "વિદ્યાર્થીઓને માર્ગદર્શન, પુસ્તકો અને ફી સહાય, તથા કરિયર કાઉન્સેલિંગ કાર્યક્રમો.",
      icon: GraduationCap,
    },
    {
      title: "માનવતા સંગમ – આરોગ્ય અને સેવા",
      detail: "મેડિકલ કેમ્પ, રક્તદાન શિબિર અને આરોગ્ય જનજાગૃતિ સત્રો.",
      icon: Stethoscope,
    },
    {
      title: "પેઠી પ્રેરણા – ગ્રામ્ય યુવાનોનો ઉત્સવ",
      detail:
        "ગામોમાં પ્રતિભાશાળી યુવાઓ માટે સ્પર્ધાઓ, રમત-ગમત અને કૌશલ્ય વર્કશોપ્સ.",
      icon: Users,
    },
    {
      title: "સ્નેહમૃદુ – વિશિષ્ટ માનવતા",
      detail: "વૃદ્ધાશ્રમ/અનાથાશ્રમ મુલાકાતો, સહાય અને સાંસ્કૃતિક કાર્યક્રમો.",
      icon: Handshake,
    },
    {
      title: "વાણીવટિકા – જ્ઞાન અને સાહિત્ય પ્રોત્સાહન",
      detail:
        "ગ્રંથાલય અભિયાન, પુસ્તકદાન અને ગામડાંમાં વાંચન સંસ્કૃતિનું સંવર્ધન.",
      icon: BookOpen,
    },
  ];
  return (
    <Section id="journey" title="આર્ય ધ રોયલ ફાઉન્ડેશન – સેવા યાત્રા">
      <div className="grid md:grid-cols-2 gap-6">
        {steps.map((s) => (
          <Card
            key={s.title}
            className="border border-border/60 bg-card/70 shadow-sm"
          >
            <CardContent className="p-6 flex gap-4">
              <div className="p-2 h-10 w-10 rounded-md bg-secondary text-secondary-foreground flex items-center justify-center shrink-0">
                <s.icon className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-gujarati text-lg md:text-xl font-bold text-primary">
                  {s.title}
                </h4>
                <p className="font-gujarati text-base mt-1">
                  {s.detail}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
};

const Trustees = () => (
  <Section id="trustees" title="ટ્રસ્ટીશ્રી ઓની યાદી">
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <h3 className="font-gujarati text-2xl font-bold text-primary mb-3">
          ટ્રસ્ટીઓ
        </h3>
        <ul className="list-disc pl-5 space-y-2 font-gujarati font-semibold text-base md:text-lg">

          <li>પારસ દવે – પ્રમુખ</li>
          <li>તુષાર ત્રિવેદી – ઉપ પ્રમુખ</li>
          <li>ચૈતન્ય ત્રિવેદી – મંત્રી</li>
          <li>હર્ષ ત્રિવેદી – ખજાનચી</li>
          <li>કુલદીપ ત્રિવેદી</li>
          <li>પ્રવીણ દવે</li>
          <li>દિવ્યેશ પુરોહિત</li>
        </ul>
      </div>
      <div>
        <h3 className="font-gujarati text-2xl font-bold text-primary mb-3">
          સંપર્ક
        </h3>
        <div className="space-y-2 font-gujarati text-base md:text-lg">
          <p>મુખ્ય કચેરી: અમદાવાદ, ગુજરાત, ભારત</p>
          <p>સંપર્ક: 9099926324</p>
          <p>સોશિયલ મીડિયા: Facebook / Instagram / Twitter</p>
        </div>
      </div>
    </div>
  </Section>
);

const StructuredData = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "આર્ય ધ રોયલ્સ ફાઉન્ડેશન – અમદાવાદ",
    url: "https://9badb018-feca-4195-9e06-d14fc0e61e99.lovableproject.com",
    description:
      "શિક્ષણ, આરોગ્ય, રોજગાર અને સેવા માટે પ્રતિબદ્ધ સામાજિક સંસ્થા.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ahmedabad",
      addressRegion: "Gujarat",
      addressCountry: "IN",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+919099926324",
        contactType: "customer service",
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
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
