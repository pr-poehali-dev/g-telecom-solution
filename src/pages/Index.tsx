import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const tariffs = [
    {
      name: 'Старт',
      price: '300',
      data: '10 ГБ',
      minutes: '500 мин',
      sms: '100 SMS',
      features: ['Безлимит на мессенджеры', '4G/LTE', 'Перенос номера'],
      popular: false,
    },
    {
      name: 'Про',
      price: '600',
      data: '30 ГБ',
      minutes: '1500 мин',
      sms: '300 SMS',
      features: ['Безлимит на мессенджеры', '5G', 'Перенос номера', 'Роуминг по России'],
      popular: true,
    },
    {
      name: 'Макс',
      price: '900',
      data: 'Безлимит',
      minutes: 'Безлимит',
      sms: 'Безлимит',
      features: ['Все мессенджеры', '5G', 'Перенос номера', 'Международный роуминг', 'Приоритет сети'],
      popular: false,
    },
  ];

  const gadgets = [
    { name: 'iPhone 15 Pro', price: 'от 5990₽/мес', image: '📱', color: 'from-blue-500/20 to-purple-500/20' },
    { name: 'Samsung Galaxy S24', price: 'от 4990₽/мес', image: '📱', color: 'from-purple-500/20 to-pink-500/20' },
    { name: 'AirPods Pro', price: 'от 1290₽/мес', image: '🎧', color: 'from-cyan-500/20 to-blue-500/20' },
    { name: 'Apple Watch', price: 'от 2490₽/мес', image: '⌚', color: 'from-pink-500/20 to-orange-500/20' },
  ];

  const services = [
    { icon: 'Smartphone', title: 'Подключение номера', description: 'Новый номер за 5 минут' },
    { icon: 'RefreshCw', title: 'Смена тарифа', description: 'Переход без потери номера' },
    { icon: 'Phone', title: 'Перенос номера', description: 'От другого оператора' },
    { icon: 'Wifi', title: 'Домашний интернет', description: 'До 1 Гбит/с' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted">
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-bold text-xl">
                G
              </div>
              <span className="text-2xl font-bold">G-Telecom</span>
            </div>

            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection('home')} className="hover:text-primary transition-colors">
                Главная
              </button>
              <button onClick={() => scrollToSection('tariffs')} className="hover:text-primary transition-colors">
                Тарифы
              </button>
              <button onClick={() => scrollToSection('gadgets')} className="hover:text-primary transition-colors">
                Гаджеты
              </button>
              <button onClick={() => scrollToSection('services')} className="hover:text-primary transition-colors">
                Услуги
              </button>
              <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">
                О нас
              </button>
              <button onClick={() => scrollToSection('contacts')} className="hover:text-primary transition-colors">
                Контакты
              </button>
              <Button className="bg-gradient-to-r from-primary to-secondary">Личный кабинет</Button>
            </div>

            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <Icon name={mobileMenuOpen ? 'X' : 'Menu'} size={24} />
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 flex flex-col gap-4 animate-fade-in">
              <button onClick={() => scrollToSection('home')} className="text-left hover:text-primary transition-colors">
                Главная
              </button>
              <button onClick={() => scrollToSection('tariffs')} className="text-left hover:text-primary transition-colors">
                Тарифы
              </button>
              <button onClick={() => scrollToSection('gadgets')} className="text-left hover:text-primary transition-colors">
                Гаджеты
              </button>
              <button onClick={() => scrollToSection('services')} className="text-left hover:text-primary transition-colors">
                Услуги
              </button>
              <button onClick={() => scrollToSection('about')} className="text-left hover:text-primary transition-colors">
                О нас
              </button>
              <button onClick={() => scrollToSection('contacts')} className="text-left hover:text-primary transition-colors">
                Контакты
              </button>
              <Button className="bg-gradient-to-r from-primary to-secondary w-full">Личный кабинет</Button>
            </div>
          )}
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Связь будущего уже сегодня
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              G-Telecom — передовые технологии связи, выгодные тарифы и лучшее покрытие 5G
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary text-lg px-8 animate-glow">
                <Icon name="Smartphone" size={20} className="mr-2" />
                Подключить номер
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-primary/50 hover:bg-primary/10">
                <Icon name="Play" size={20} className="mr-2" />
                Узнать больше
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
            {[
              { icon: 'Zap', label: '5G сеть', value: 'Самая быстрая' },
              { icon: 'Users', label: 'Клиентов', value: '2+ млн' },
              { icon: 'Award', label: 'Рейтинг', value: '4.9/5.0' },
              { icon: 'MapPin', label: 'Городов', value: '1000+' },
            ].map((stat, idx) => (
              <Card
                key={idx}
                className="bg-card/50 backdrop-blur border-primary/20 hover:border-primary/50 transition-all hover:scale-105 animate-scale-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <Icon name={stat.icon as any} size={24} className="text-primary" />
                  </div>
                  <div className="text-2xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="tariffs" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Выберите свой тариф</h2>
            <p className="text-xl text-muted-foreground">Прозрачные условия без скрытых платежей</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {tariffs.map((tariff, idx) => (
              <Card
                key={idx}
                className={`relative overflow-hidden transition-all hover:scale-105 animate-fade-in ${
                  tariff.popular
                    ? 'border-primary shadow-lg shadow-primary/20 bg-gradient-to-b from-card to-primary/5'
                    : 'bg-card/50 backdrop-blur'
                }`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {tariff.popular && (
                  <div className="absolute top-0 right-0">
                    <Badge className="bg-gradient-to-r from-primary to-secondary rounded-tl-none rounded-br-none">
                      Популярный
                    </Badge>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{tariff.name}</CardTitle>
                  <CardDescription>
                    <span className="text-4xl font-bold text-foreground">{tariff.price}₽</span>
                    <span className="text-muted-foreground">/мес</span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Icon name="Database" size={18} className="text-primary" />
                      <span className="font-semibold">{tariff.data}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Phone" size={18} className="text-primary" />
                      <span className="font-semibold">{tariff.minutes}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="MessageSquare" size={18} className="text-primary" />
                      <span className="font-semibold">{tariff.sms}</span>
                    </div>
                  </div>
                  <div className="border-t border-border pt-4 space-y-2">
                    {tariff.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-primary" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button
                    className={`w-full ${tariff.popular ? 'bg-gradient-to-r from-primary to-secondary' : ''}`}
                    variant={tariff.popular ? 'default' : 'outline'}
                  >
                    Подключить
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gadgets" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Гаджеты в рассрочку</h2>
            <p className="text-xl text-muted-foreground">Новейшие устройства без переплат</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {gadgets.map((gadget, idx) => (
              <Card
                key={idx}
                className="group bg-card/50 backdrop-blur border-primary/20 hover:border-primary/50 transition-all hover:scale-105 animate-scale-in overflow-hidden"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className={`h-48 bg-gradient-to-br ${gadget.color} flex items-center justify-center text-7xl`}>
                  {gadget.image}
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{gadget.name}</CardTitle>
                  <CardDescription className="text-xl font-bold text-primary">{gadget.price}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" variant="outline">
                    Оформить
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground">Полный спектр телекоммуникационных решений</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {services.map((service, idx) => (
              <Card
                key={idx}
                className="bg-card/50 backdrop-blur border-primary/20 hover:border-primary/50 transition-all hover:scale-105 group animate-fade-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-14 h-14 mb-4 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon name={service.icon as any} size={28} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">О компании</h2>
          </div>

          <Card className="bg-card/50 backdrop-blur border-primary/20">
            <CardContent className="pt-6 space-y-6">
              <p className="text-lg leading-relaxed">
                <span className="font-bold text-primary">G-Telecom</span> — современный оператор мобильной связи, который
                использует передовые технологии для предоставления качественных услуг связи. Мы первыми в России запустили
                коммерческую сеть 5G и продолжаем расширять покрытие.
              </p>
              <p className="text-lg leading-relaxed">
                Наша миссия — сделать качественную связь доступной для каждого. Мы предлагаем прозрачные тарифы без скрытых
                платежей, круглосуточную поддержку и современные технологии.
              </p>
              <div className="grid sm:grid-cols-3 gap-6 pt-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">2018</div>
                  <div className="text-sm text-muted-foreground">Год основания</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">2M+</div>
                  <div className="text-sm text-muted-foreground">Активных клиентов</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
                  <div className="text-sm text-muted-foreground">Время работы сети</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Контакты</h2>
            <p className="text-xl text-muted-foreground">Свяжитесь с нами удобным способом</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-card/50 backdrop-blur border-primary/20">
              <CardHeader>
                <CardTitle>Свяжитесь с нами</CardTitle>
                <CardDescription>Оставьте заявку и мы перезвоним вам</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Имя</label>
                  <Input placeholder="Ваше имя" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Телефон</label>
                  <Input placeholder="+7 (___) ___-__-__" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Сообщение</label>
                  <Textarea placeholder="Ваш вопрос или комментарий" rows={4} />
                </div>
                <Button className="w-full bg-gradient-to-r from-primary to-secondary">Отправить</Button>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <Card className="bg-card/50 backdrop-blur border-primary/20">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" size={24} className="text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Телефон</div>
                      <div className="text-muted-foreground">+7 (915) 287-87-87</div>
                      <div className="text-sm text-muted-foreground"></div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur border-primary/20">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" size={24} className="text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Email</div>
                      <div className="text-muted-foreground">support@g-telecom.ru</div>
                      <div className="text-sm text-muted-foreground">Ответим в течение часа</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur border-primary/20">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" size={24} className="text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Адрес</div>
                      <div className="text-muted-foreground">г. Москва, ул. Тверская, 1</div>
                      <div className="text-sm text-muted-foreground">Пн-Вс: 09:00 - 21:00</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-card border-t border-border py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-bold text-xl">
                  G
                </div>
                <span className="text-xl font-bold">G-Telecom</span>
              </div>
              <p className="text-sm text-muted-foreground">Связь будущего уже сегодня</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>О нас</div>
                <div>Карьера</div>
                <div>Пресс-центр</div>
                <div>Партнерам</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>Помощь</div>
                <div>FAQ</div>
                <div>Контакты</div>
                <div>Салоны связи</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Соцсети</h4>
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-lg bg-muted hover:bg-primary/20 flex items-center justify-center cursor-pointer transition-colors">
                  <Icon name="Instagram" size={20} />
                </div>
                <div className="w-10 h-10 rounded-lg bg-muted hover:bg-primary/20 flex items-center justify-center cursor-pointer transition-colors">
                  <Icon name="Send" size={20} />
                </div>
                <div className="w-10 h-10 rounded-lg bg-muted hover:bg-primary/20 flex items-center justify-center cursor-pointer transition-colors">
                  <Icon name="Youtube" size={20} />
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            © 2024 G-Telecom. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;