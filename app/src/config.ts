import { defineConfig } from "@tok/generation";

export default defineConfig({
  // If you want to add language/currency localization – see ./examples/meditation as reference

  pages: [
    {
      slides: [
        // intro
        {
          media: {
            type: "sticker",
            src: import("./assets/stickers/duck_hello.tgs"),
            size: 250,
          },
          shape: "square",
          pagination: "count",
          title: "Добро пожаловать в 1XBet AI Бот",
          description: "Мы делаем прогнозы на спорт с исользованием ИИ",
          button: "Дальше",
        },

        // form
        {
          extends: "form", // note, it's important to extend from 'form' here
          media: {
            type: "sticker",
            src: import("./assets/stickers/duck_spy.tgs"),
            size: 150,
          },
          shape: "square",
          pagination: "count",
          title: "Условия",
          description: "Нажимая кнопку 'Дальше' вы соглашаетесь с правилами",
          form: [
            // {
            //   id: "text_from_form",
            //   placeholder: "Text input",
            //   type: "text",
            // },
            // {
            //   id: "number_from_form",
            //   placeholder: "Number input",
            //   type: "number",
            // },
            {
              id: "checkbox_from_form",
              placeholder: "Мне исполнилось 21 год",
              type: "checkbox",
            },
          ],
          button: "Дальше",
        },

        // list
        {
          media: {
            type: "sticker",
            src: import("./assets/stickers/duck_juggling.tgs"),
            size: 150,
          },
          shape: "square",
          pagination: "count",
          title: "Возможности бота",
          list: [
            {
              media: {
                type: "icon",
                src: import("./assets/icons/guide.svg"),
                size: 30,
              },
              text: "Открытая история наших прогнозов",
            },
            {
              media: {
                type: "icon",
                src: import("./assets/icons/track.svg"),
                size: 30,
              },
              text: "Вероятности исходов",
            },
            {
              media: {
                type: "icon",
                src: import("./assets/icons/time.svg"),
                size: 30,
              },
              text: "Ваша статистика",
            },
          ],
          button: "Next",
        },

        // "everything is customizable" slide
        // {
        //   media: {
        //     type: "sticker",
        //     src: import("./assets/stickers/duck_xray.tgs"),
        //     size: 250,
        //   },
        //   shape: "square",
        //   pagination: "count",
        //   title: "Everything is customizable",
        //   description: "",
        //   textAlign: "center",
        //   list: [
        //     "<b>CSS styles</b>: extend primary colors from Telegram or set yours",
        //     "Button text and actions (look down)",
        //     "Use our carefully crafted <b>presets</b> or easily create your own",
        //   ],
        //   button: "Super-Duper Next",
        // },

        // slide with other features
        // {
        //   media: {
        //     type: "sticker",
        //     src: import("./assets/stickers/duck_cool.tgs"),
        //     size: 150,
        //   },
        //   shape: "square",
        //   pagination: "count",
        //   title: "Some other features:",
        //   description: "",
        //   list: [
        //     "One-click 0$ <b>deploy</b> on GitHub Pages",
        //     "Language and currency localization",
        //     "Buttons with <b>haptic</b> feedback",
        //     "Content pre-loading for high speed",
        //     "<b>Low-code</b> approach to building onboardings",
        //     "Many examples/presets",
        //     "And many more... (see <a href='https://github.com/Easterok/telegram-onboarding-kit' target='_blank'>GitHub</a>)",
        //   ],
        //   button: "Next",
        // },

        // go to paywall slide
        // {
        //   media: {
        //     type: "sticker",
        //     src: import("./assets/stickers/duck_knife.tgs"),
        //     size: 250,
        //   },
        //   shape: "square",
        //   pagination: "count",
        //   textAlign: "center",
        //   title: "But onboarding slides are not enough...",
        //   description: "Let's go to Paywall",
        //   button: {
        //     content: "Go to Paywall",
        //     to: "/paywall",
        //   },
        // },
      ],
    },

    // paywall
    {
      extends: "paywall",
      path: "/paywall",
      media: {
        type: "sticker",
        src: import("./assets/stickers/duck_money.tgs"),
        size: 150,
      },
      shape: "square",
      title: "Your beautiful Paywall",
      list: [
        "Adjustable product cards",
        "<b>👛 Wallet Pay</b> and <b>Telegram Payments</b> ready. Add custom methods easily",
        "Subscriptions or One-time payments",
      ],
      products: [
        {
          id: "1_month_subscription",
          title: "1 month subscription",
          description: "2$/month",
          discount: "",
          price: 2,
        },
        {
          id: "1_year_subscription",
          title: "1 year subscription",
          description: "1$/month",
          discount: "Discount 50%",
          price: 12,
        },
        {
          id: "lifetime_access",
          title: "Lifetime access",
          description: "20$ once",
          discount: "Best offer",
          price: 20,
        },
      ],
      mainButtonText: "Buy for {price}",
      popup: {
        // popup for payment methods choice
        type: "web",
      },
      links: [
        {
          text: "Privacy policy",
          href: "https://google.com",
        },
        {
          text: "Terms of use",
          href: "https://google.com",
        },
      ],
    },
  ],
});
