module.exports = {
  lang: 'English',
  head: {
    title: 'Vite - High-performance decentralized ecosystem',
    document: 'Document',
    description: {
      index: 'Vite - High-performance decentralized ecosystem',
      careers: 'Welcome to join our Vitelabs, Let\'s create A New Generation of High-performance Decentralized Application Platform',
      faq: 'All about FAQs of Vite',
      technology: 'The key technologies of Vite: DAG、Snapshot Chain、Asynchronous Architecture、Reactive Contract、Quota leasing、Loopring Integrated、Timer scheduling、Contract Upgrade、solidity++'
    }
  },
  exchange: {
    okex: 'OKEX.COM'
  },
  nav: {
    index: 'Home',
    technology: 'Technologies',
    team: 'Team',
    faq: 'FAQs',
    superNodes: 'Guide for SBP (Snapshot Block Producer)',
    nodeList: 'SBP Candidates',
    nodeDetail: 'SBP Details',
    careers: 'Careers',
    notice: {
      name: 'Super Nodes',
      specific: 'Guide for SBP (Snapshot Block Producer)',
      apply: 'Apply for SBP (Snapshot Block Producer) '
    },
    press: 'Press',
    exchange: 'Exchanges'
  },
  home: {
    header: 'Vite',
    slogan: 'High-performance decentralized ecosystem',
    whitePaper: 'White Paper',
    testnet: 'TestNet'
  },
  feature: {
    performance: {
      title: 'Ultra High Performance',
      dag: {
        title: 'DAG Ledger',
        content: 'Transactions in Vite are grouped by accounts.  That is, each transaction only changes the state of one single account.  Send transactions are separated from receive transactions, thereby obviating the need to wait for a transfer to be complete before the initiation of another transaction. The hierarchical design of the consensus algorithm allows horizontal scalability in consensus groups.'
      },
      async: {
        title: 'Asynchronous Architecture',
        content: 'Vite splits transactions into transaction pairs according to a "request-response" pattern. The writing and verification of transactions are asynchronously decoupled, thereby supporting ultra-high throughput. Inter-contract communications are based on an asynchronous messaging model.'
      }
    },
    reactiveContract: {
      title: 'Reactive Contract',
      messageDriven: {
        title: 'Message-Driven',
        content: 'With an event-driven architecture, every smart contract is viewed as an independent service.  Contracts communicate via messages without sharing state.'
      },
      solidity: {
        title: 'Solidity++',
        content: 'Solidity++’s syntax is compatible with most of that of Solidity.  The new syntax supports asynchronous semantics, contract scheduling, and provides a series of standard libraries, such as string manipulation, floating-point operations, basic mathematical operations, containers, sorting, and so on.'
      }
    },
    ecosystem: {
      title: 'Integrated Decentralized Ecosystem',
      value: {
        title: 'End-to-end system for value transfer',
        content: 'Vite itself is a decentralized exchange that supports digital asset issuance, cross-chain value transmission, and inter-token transactions based on the Loopring protocol.  A quota-based resource allocation mechanism allows light users to pay zero fees and gas. Users can obtain computing resources in multiple ways.  Vite also supports quota leasing.'
      },
      dapp: {
        title: 'dApp Mini Programs',
        content: 'The Vite client features an engine for creating HTML5-based decentralized mini programs.  This engine simplifies the process of dApp development and deployment.'
      }
    }
  },
  roadmap: {
    title: 'Roadmap',
    timelines: [
      {
        'time': 'Feb 2018',
        'description': 'Initiation of Project'
      },
      {
        'time': 'April 2018',
        'description': 'System design of Vite, completion of white paper'
      },
      {
        'time': 'May 2018',
        'description': 'Release the official website / Road show'
      },
      {
        'time': 'June 2018',
        'description': 'Beginning of Vite Core\'s R&D'
      },
      {
        'time': 'Oct 2018',
        'description': 'Vite Core alpha'
      },
      {
        'time': 'Dec 2018',
        'description': [
          'Vite Core beta M1: Trading / Issuance of assets / Hierarchical consensus algorithm / Snapshot chain',
          'Release Vite SDK',
          'Vite Blockchain browser'
        ]
      },
      {
        'time': 'Jan 2019',
        'description': 'Desktop client of Vite'
      },
      {
        'time': 'Feb 2019',
        'description': 'Alpha version of Vite mobile app'
      },
      {
        time: 'April 2019',
        description: [
          'Vite Core beta M2: Smart Contract / Solidity++ Compiler / Smart Contract API Documentation'
        ]
      },
      {
        'time': 'May 2019',
        'description': [
          'Vite Core beta M3: Quota leasing / Contract timing scheduling / VNS naming services',
          'Vite dApplet support within Mobile app'
        ]
      },
      {
        'time': 'July 2019',
        'description': 'Vite Core beta M4：Loopring / Ethereum cross-chain gateway'
      },
      {
        'time': 'Aug 2019',
        'description': 'Vite integrated decentralized trading function within Mobile app'
      },
      {
        'time': 'Oct 2019',
        'description': 'Vite Core beta M5: Contract upgrade / Block pruning / Solidity++ optimization'
      },
      {
        'time': 'Nov 2019',
        'description': 'Vite TestNet Release'
      },
      {
        'time': 'Jan 2020',
        'description': 'Vite 1.0 Release'
      },
      {
        'time': 'Feb 2020',
        'description': 'Kickoff of plan for ecosystem development in Vite'
      }
    ]
  },
  elector: {
    'title': 'SBP Candidates',
    'detailTitles': [
      {
        key: 'info',
        title: 'Information of Team Members'
      },
      {
        key: 'photo',
        title: 'Photos'
      },
      {
        key: 'config',
        title: 'Configuration of Data Center'
      },
      {
        key: 'location',
        title: 'Service Location'
      }, {
        key: 'plan',
        title: 'Eco-development Plans'
      }],
    'rightCommonPart': {
      title: 'Social Medias',
      email: 'Email',
      twitter: 'Twitter',
      telegram: 'Telegram',
      website: 'Website'
    },
    'nameMap': {
      'vitecity': {
        info: ['Hu Jinlang: Founder of ViteCity node，MSc of Finance from Chinese University of Hong Kong, CFA, CPA, previously worked for Deloitte consulting, responsible for the overseas listing of Chinese stocks, veteran in capital operation. Serving for the overseas listing of the stocks cases such as Jumeiyoupin, Paipai Dai, Uxin Group, etc. Now employed by a well-known blockchain investment bank, affluent exchange and blockchain media resources, helping establishing blockchain projects overseas Foundation, issuing overseas, listing, etc., served for many top 100 projects with market capitalization, such as VET, Tron, link, WTC, IOST, ELF, etc., resident in Shanghai, China.',
          'Zeng Zhifang: B.A in Beijing Foreign Studies University, MSc of Journalism, Waseda University, Japan; Manager of well-known community, operating 30,000 technical communities, working closely with CSDN, Open Source China, 51CTO and other top domestic technology communities; abundant blocks Chain media resources like Jinse Finance, 8btc, Lian Dede, Walian Net, Nuclear Finance, Huobi Information, Babi Finance and keeps in close touch with them; community operations experts, with multiple blockchain communities, covering thousands of users; rich overseas community resources, once planned to discuss a project in reddit within one month, and promote the project\'s market value to increase four times in three months; resident in Shanghai, China.',
          'Zhong Lifeng: CTO, MSc of Computer Science in Zhejiang University, 10 years of technical development experience, former developer in the fourth paradigm artificial intelligence company responsible for big data and advertising business development; good at AI deep learning algorithm, deep understanding of financial transactions, now in charge of the development of cryptocurrency quantification system; resident in Shanghai, China.'],
        config: ['8 cores 16G 100 Mbps bandwidths'],
        location: ['Hangzhou & China'],
        photo: [],
        medium: ['1. First of all, we are trying to increase the exposure rate of Vite in many vertical blockchain medias including 8btc, Jinse Finance, Lian Dede etc., we leave open the possibility that adopting the form of setup a node column.',
          '2. Operating a node account in social medias such as WeChat official account, Weibo, Twitter, reddit, facebook, etc., this account will be in charge by a professional person in order to enhance the interaction with fans.',
          '3. Periodically plan for community airdrops and try to get more and more fans of Vite constantly.'],
        plan: ['1. Increasing the exposure rate of Vite by blockchain medias, wallet, market trending apps, setting up accounts of various social medias and charging by professionals, evangelizing the technical advantages of Vite project and retweeting the official announcement and progress of project.',
          '2. Designing Vite themed products and organizing offline meetup of fans regularly, meanwhile, the community will be in charge of professionals and combine with official meetup event as well as media, wallet market trending apps to plan for airdrops.',
          '3. Making some incentive plans to activate community developers to support the up-coming dApp development of Vite ecosystem.'],
        'name': 'ViteCity',
        'description': 'Make vite-blockchain stronger ！'
      },
      'tenzor': {
        info: ['Tenzor Capital, more than 4 years in VC business. Founder of icoscoring.com. Kirill has deep knowledge in investment management, financial modelling and deals structuring. He has obtained BS is Chemistry and MA in Economics in the one of leading Russian university - MSU.',
          'Maksim Mizerov - senior analyst Tenzor Capital and Icoscoring.com. He has deep knowledge in the financial infrastructure. He worked at the Moscow Exchange at the primary market. Maksim has more than 3 years of trading experience at stock and crypto exchanges. He has graduated from the leading economics university in Russia NES and one of the best university - HSE.',
          'Daniil Ogurtsov - senior analyst Tenzor Capital and Icoscoring.com. He has great experience in Big4 consulting company and leading oil&gas company Rosneft. He has graduated from MGIMO, the top-tier Russian university.'],
        config: ['32 GB, 8 CPU, 640 GB SSD, More than 100Mbps bandwidth'],
        photo: [],
        medium: ['We actively work with the community at Twitter, Medium and Telegram.',
          'Our team and our close partners have active community in EU & Russia exceeding 600K people.'],
        location: ['US, UK, Germany, Canada, Netherlands, Singapore, depending on your needs'],
        plan: ['Our team has huge experience in investor relation field. We always help our portfolio projects with the community development and the adoption of the technology.',
          'Our team and our close partners have active community in EU & Russia exceeding 600K people. We provide advisory services in building the marketing strategy and in promotion on CIS and SEA markets.',
          'We could attract C-level industry experts as advisors for projects. In addition to that, we have a proven track record in hiring for IT startups.',
          'As a result, our team has the great value proposition for Vite community and we could bust the development and adoption of the project.'],
        name: 'Tenzor',
        description: 'Unite the world through the blockchain technology.'
      },
      'snap': {
        info: ["Mathew Pham (AKA plasmo) I first got first interested in crypto/blockchain when I found out about Bitcoin in 2012. Invested in a small amount and ever since then, I've truly fallen in love with everything crypto/blockchain-related (especially smart contracts). I've dabbled before in hosting nodes, mining and investing/using one of the first ever mass produced Bitcoin miners (Kncminer), beta testing in the first ever version of Ubuntu Linux back in 2004 and even operating my own business hosting gaming servers/competitions. I discovered Vite back in May, read the Vite Whitepaper, looked over the team's extensive background and thought to myself that this could be become something big. I want to help Vite grow. I am located in Melbourne, Australia."],
        config: ['Intel i5-8600K (6 cores), 16GB DDR4 memory, Samsung SSD, 100Mbps connection'],
        location: ['Melbourne, Australia'],
        photo: [],
        medium: ["I have a Twitter created to provide status on node status, read updates on the Vite ecosystem, and to find out about important events. I have also created a website where users will be able to visit and view node/network status, use the vote calculator to see Vite earning potential, read tutorials and to enter competitions. Forging rewards will also be used to create media, advertisements on Twitter and Reddit, and basically anything to help promote Vite's growth. I'm open to all ideas. "],
        plan: ['Create articles about the Vite platform/ecosystem, provide basic tutorials (for newcomers to read and learn), program/design a calculator to show how much a voter can earn just by voting for Snap Secure supernode, provide competitions so community can grow/become involved and also a possibility to help provide funding for developers to create Vite Dapps or migrate Ethereum Dapps over to the Vite platform.'],
        name: 'SnapSecure',
        description: "Securing Vite's Snapshot Chain, One Block At A Time."
      },
      'ux': {
        info: ['Vladimir Polishchuk: CTO UIXAgency.com, UIX_LAB, python developer(backend), IT security specialist, MCP, MCTS:Windows Server 2008 Network Infrastructure, Configuration, MCID: 8125056, Linux Administration, Ukraine, Nikolaev ',
          'Serhiy Polishchuk: UIXAgency.com Art Lead, 3D-modeling & 3D-sculpting for Gamedev, CGI, Animation, Project Manager, Ukraine, Nikolaev',
          'Julia Novak: SMM, Mobile Marketing & Promotion specialist, Mobile Markets analytic'],
        config: ['HP DL360e, 2 x Xeon E5-2430 v2 @ 2.50GHz, 64 GB RAM, 240GB+2x500GB SSD, HP Smart Array P420i/2GB. 1 Gb/s speed inter&intranet'],
        location: ['Ukraine, Nikolaev City'],
        photo: [],
        medium: ['in progress..'],
        plan: ["General strategy of building community in progress for now, need a few days for introducing it. In plans: - build a new site for SBP (design like https://uixagency.com) - add VITE as payment method for our outsourced projects - we want to create an e-shop of exclusive limited jewellery collection or many, one of this collections could be designed with VITE logo - for example ... this idea is flashing in my mind just now - trying to integrate VITE in mobile games and apps - we have gamedev and appdev departments to our team really likes VITE Platform, that's why we accumulate about 2.5 mil VITE and ready for helping to integrate VITE tokens in our reality :)"],
        name: 'UX SBP',
        description: 'async equity'
      },
      'loopring': {
        info: ['Kongliang, Zhong ; ',
          'Leila, Lin,Shanghai, China'],
        config: ['NA'],
        location: ['Shanghai'],
        photo: [],
        medium: ['We have all social media and KOL ready for this campaign.'],
        plan: ['we currently have an over 200K blockchain community. we are planning to promote and advocate Vite in our community.'],
        name: 'Loopnode',
        description: 'Loop the world'
      },
      'zhizifund': {
        info: ['Dawei Li, co-founder of the Zhizi Fund who has 15 years of experience in the semiconductor industry, and has deep cooperation with mining machine manufacturers. In 2014, he began to enter the blockchain industry and become a early blockchain investor. Resident in Shenzhen, China',
          'Feng Gao, co-founder of the Zhizi Fund Project, early participants and enthusiasts of the blockchain, many years of experience in the financial industry, and seasoned in project investment management. Resident in Australia'],
        config: ['8 cores CPU 16G storage, 100 Mbps bandwidth, 1T SSD storage, CentOS 7.4'],
        location: ['Silicon Valley, the US'],
        photo: [],
        plan: ['1. Vite project incubation: Zhizi Fund is a BVI fund focusing on blockchain technology and cryptocurrency investment. As an early investment institution of Vite, we will also actively participate in the incubation of Vite\'s early projects and provide full support for investment, operation and technology for Vite ecological project partners.',
          '2. There are many partners of Zhizi Fund: since our establishment, Zhizi Fund has established good cooperative relations with many well-known projects domestic and overseas. We will provide Vite with resource cooperation and resource integration to promote the development of Vite.',
          '3. Overseas market expansion: Overseas has always been the focus of investment and cooperation of Zhizi Fund. We also have our own operation center in Australia. We will provide more resources for overseas cooperation and market expansion for Vite.',
          '4. Community and media: Zhizi Fund has a good cooperative relationship with a number of high-quality medias, which can enhance the overall promotion of Vite. Offline meetups, etc.;',
          '5. Highly recognizable Vite\'s development philosophy: Vite is a new generation of responsive blockchain, providing a reliable public platform for industrial decentralized applications. The development direction of the public chain advocated by Vite is highly consistent with the Zhizi Fund, and the Zhizi Fund will fully promote the development of Vite ecological construction.'],
        medium: ['Official Website',
          'Jinse Finance',
          'Bihu',
          'Bishijie',
          'Weibo',
          'Twitter'],
        name: 'ZVnode',
        description: 'Zhizi Fund, support for the development of Vite ecosystem'
      },
      'linknode': {
        info: ['Jiapeng Lin, Founding Partner, Jiapeng is the founding partner of LinkVC, a leading crypto fund which aim to incubate the most creative and game-changing companies in the blockchain industry. Prior to founding LinkVC, Jiapeng was a co-founder of Aicoin and consultant of Okcoin. Before Aicoin，he worked in the NASDAQ listed company Xunlei network, responsible for core product development, including Xunlei client, Xunlei Finance, Xunlei video and Thunder member value-added services. ',
          'Henry（He） Xu, Partner, Henry is a partner of LinkVC. Prior to joining LinkVC, he was the early team member of Chinese top tech blog PingWest，Chief Editor of SLD website“SHIFT”. Founder of whitepaper researcher club “Monroe protocol”. Before that, Henry played various roles in Nanfang Daily、SEEC Media Group Limited、Autobot venture capital partners.',
          'Li Zhang, Partner, Li is a partner of LinkVC. She is an early practitioner and sophisticated investor in blockchain industry. Prior to LinkVC, Li was in charge of the business development in Huobi, which is the most popular cryptocurrency exchange worldwide. Before Huobi, Li was the CMO of f2pool.'],
        config: ['NA'],
        location: ['NA'],
        plan: ['Linknode is backed up by LinkVC, a crypto fund committed to serving outstanding companies and developers in the field of blockchain with global commercial resources and professional financial services. In the past two years, linkVC invested dozens projects worldwide including Aicoin, BBEX, aelf, Zilliqa, Blockv, Certik, Oasis labs, etc.',
          '1. We have strong competitive advantages in both media exposure and industry resources. Having linknode as a super node, Vite can easily cooperate with other top tier projects to enhance community‘s influence.',
          '2. Our rich experience in community building and project landing process can prevent the twist and turns in your development. ',
          '3. Brand and endorsement effect'],
        medium: ['As mentioned, LinkNode can provide various exposure channels.',
          '1. We are the shareholder of several leading blockchain medias, such as pivot, AICoin, dp rating and chainfor.',
          '2. Influential social medias account on hand in both WeChat and Telegram'],
        name: 'LinkNode',
        description: 'Born to be different'
      },
      'bitvite': {
        info: ['William Wang, senior financial expert and blockchain entrepreneur, co-founder of Bit Dimension, more than 5 years experience in the operation and management of Fortune 500 companies, has founded many technology companies. Living in Guangzhou, China.',
          'Senyuan Zhang, blockchain engineer. Proficient in block technology, continuous blockchain entrepreneurs.The first batch of bitcoin players in China. With the successful application experience of multiple blockchains,he believes that the era of big navigation in the blockchain will come.Living in Guangzhou, China.',
          'Alex Lee, senior Bitcoin player, co-founder of Fibos SuperNode, has more than 5 years of digital currency investment experience, more than three years of senior financial management experience, and continuous blockchain entrepreneurs. Living in Guangzhou, China.'],
        config: ['16 GB, 4 CPU, More than 100 Mbps bandwidth'],
        location: ['Shenzhen, China'],
        plan: ['2018 is destined to be an extraordinary year. Under the bright sunshine of the great transformation of the 40th anniversary of reform and opening up, the blockchain field has gradually penetrated into all walks of life and exerted its "credit value" function. Looking back at the 2017 chain and the currency circle, there is no doubt that "a big Yangxian can change the belief", "as long as you buy and hold, you can lie down and make money" hot market, but the tide will eventually recede, the economic market No one can guarantee that compared with the chain and the currency circle, it is necessary to effectively reflect the value of the team, accelerate the integration with the real economy, and cooperate with the common promotion of policies, technologies and markets to optimize the traditional industrial model and help the high quality. development of. As a public chain based on DAG technology, Vite proposes a forward-looking point of view of joint governance, and publicly selects high-quality talents with ability, condition, responsibility and ideal blockchain. As the candidate for Vite nodes, the following three points are bit dimensions. Community development planning:',
          'The first, It is imperative. In the context of the Internet, where the demographic dividend is gradually fading, and the once-popular but eclipsed sharing economy, the blockchain focuses on assisting the transformation and upgrading of the industry. When the bit dimension succeeds as one of the Vite nodes, our team or community will follow. The official pace of Vite, in conjunction with the official completion of the node\'s responsibilities, participate in the Vite node co-construction and optimization steps. The Vite node is only one part of the community construction. The members of the Bit Dimensional team have doubled computer science and technology and financial economics, are proficient in various computer development languages, have more than five years of experience in the financial industry, and coincide with the blockchain field. Solid technical skills and rich experience in the development and operation of blockchain projects have made our bit dimension team more confident to be able to work on Vite nodes. At the same time, there are also Vite and Loopring positions among team members, which is a solid guideline protocol. Advocates and enthusiasts;',
          'Second, Take a multi-pronged approach. Community and ecological construction need both hard and soft. On the one hand, the bit-dimensional team with experience in node selection has a complete set of server resources, provides a series of technical support, and arranges real-time monitoring of nodes to ensure stable operation of the system; In the process of promoting Vite\'s ecological construction, the Bit Dimensional team currently has thousands of communities and mature ecological promotion and organization experience, and effectively uses the bit dimension public number, bit dimension financial website and other self-media channels and consulting communities. The technical community co-catalyzes, effectively promotes Vite, knows Vite in a popular way, understands Vite in depth, and enthusiastically joins Vite. Anyone who contributes to the bit-dimensional node, whether it is community construction or technical maintenance, will be 20% of the proceeds are incentives and 5% are outstanding contributions. And the Bit Dimensional team will also combine their own project comprehension, share technical documentation, answer and guide the Vite technology community. At the same time, the bit dimension has the experience of Dapp landing application development, and has developed distributed applications based on the underlying technology of eos and sidechain fibos. Currently, it has a deep understanding and familiarity with Vite related technical documents for the later application of ecological construction. get ready;',
          'Third, Be prepared for the rain. The Bit Dimensional Team firmly believes that in the context of the new era, the new journey, and the new mission, the blockchain revolution must be able to subvert the traditional, complex, over-centered, and inefficient system, serving more transparent and efficient And fair areas. Therefore, the bit-dimensional team is not only committed to node construction, but will use a more precise angle and more abundant power to make a combination of community construction and application development. In the future, the bit dimension team will implement “four more”. : Put forward more Vite project ideas, issue more applications, recruit more investment institutions, and recruit more people of insight.',
          'We always believe that Vite will be the leader, not only bringing the next bull market, but also leading the blockchain era, and the bit dimension, more depth!'],
        medium: ['1. We have created a blockchain media bit dimension (bitewd.com) in China to increase the vite exposure rate, and will adopt the form of opening vite knowledge column, node column, etc.;',
          '2. Open the social account of WeChat public account, Weibo account, twitter, etc. on this node, and the special person will be responsible for operating the social account and strengthen the interaction with the fans;',
          '3. Create multiple vite WeChat groups or telegraph groups, and continuously acquire new vite fans through diversified dapps developed by the team.'],
        name: 'Bitvite',
        description: 'For Vite！For Freedom'
      },
      'swissvite': {
        info: ['Julien Pidoux, Designer, Belmont-sur-Lausanne, Switzerland',
          'Guillaume Pedrazzini, Miner, Geneva, Switzerland',
          'Pierre Boiteux, Computer Engineer, Quantitative Analyst, Vevey, Switzerland',
          'Julien Mallet, Corporate Performance Management consultant, Martigny, Switzerland',
          'Jean-Luc Strullu, Full Stack Developer, Beihai, China'],
        config: ['8CPU, 24GB RAM and 100 Mbps bandwidth'],
        location: ['Geneva, Switzerland'],
        plan: ['Promotion of VITE through our website (http://swissvite.org/, in development), social media channels and meetups in Switzerland and European countries'],
        medium: ['Creation of tutorials in English and French for users and developers Development of community tools Use growth hacking methods to target communication to a maximum of people interested in DAG and blockchain'],
        name: 'Swiss Vite',
        description: 'Your VITE community at the heart of Europe'
      },
      'xinsheng': {
        info: ['Zhe Cui, founder and CEO of Xinsheng Fund, living in Beijing, China',
          'Zhibo Li, co-founder and CMO of Xinsheng Fund, living in Beijing, China',
          'Xuming Zhang, community partner, living in Beijing, China',
          'Emma, community partner, living in Beijing, China',
          'Quan Sun, Community partner, living in Beijing, China'],
        config: ['8 cores CPU 16G RAM 100 Mbps bandwidth 1T ssd storage CentOS 7.4'],
        location: ['Beijing, China'],
        plan: ['1. Promote community cooperation, organise existing communities and create new community promotion of vite.',
          '2. Integrate resources within the company\'s industry, including media, community, capital, and project parties to assist Vite in promoting business cooperation.',
          '3. Establish a Vite supernode (SBP) community to help new users understand the basics of Vite.'],
        medium: ['WeChat official account, Weibo, Twitter, Bihu, Telegram'],
        name: 'XinShengFund',
        description: 'Shoot for the Vite'
      },
      'zlnode': {
        info: ['Li Zhang, Li is a partner of LinkVC. She is an early practitioner and sophisticated investor in blockchain industry. Prior to LinkVC, Li was in charge of the business development in Huobi, which is the most popular cryptocurrency exchange worldwide. Before Huobi, Li was the CMO of f2pool.'],
        config: ['NA'],
        location: ['NA'],
        plan: ['Li is one of the most resourceful and influential KOL in the blockchain industry. As a post investment management partner of LinkVC, Li has rich experience in community building and project landing process can prevent the twist and turns in community development.'],
        medium: ['WeChat and Weibo account'],
        name: 'ZL node',
        description: 'Working for better Vite'
      },
      'loopnest': {
        info: ['Mr. Terence Lam is the co-founder and CEO of Loopnest Blockchain Accelerator at Hong Kong Cyberport. He has also been an advisor to several successful blockchain projects. He is a renowned adjunct lecturer at the HK University SPACE China Business School and a serial entrepreneur with focuses on blockchain, mobile internet and Smart City initiatives. Prior to his entrepreneurship Terence has accumulated over two decades of experience in multinational companies and has extensive practical experiences from overseas assignments in Singapore, Mainland China, and Hong Kong. Terence is a graduate from the Harvard, Tsinghua, CEIBS Senior Executive Program.  He carries a Master of Arts in Marketing Management degree from Macquarie University and a Hon. Bachelor of Engineering degree from The Chinese University of Hong Kong.'],
        config: ['AWS Elastic Compute Cloud'],
        location: ['Cloud server in Singapore, managed in Hong Kong'],
        plan: ['Loopnest Accelerator Limited is a blockchain accelerator dedicated to laying the foundation for the economy’s next digital evolution. Loopnest recognizes the blockchain space’s trending movement toward regulated, professional and securitized products and services. PwC Hong Kong and Loopnest offer the joint Blockchain Acceleration Programme that enables entrepreneurs to establish regulatory-friendly businesses in Hong Kong, allowing access to capital flow to-and-from the Greater Bay Area and international markets. For the acceleratees graduating from the PwC-Loopnest Programme, the Vite network may be a platform upon which they make contributions to the expanding global blockchain economy.'],
        medium: ['Loopnest plans to hold regular meetups within the blockchain and fin-tech community in Hong Kong. Such events provide opportunities for admitted startups under PwC-Loopnest Blockchain Acceleration Programme to showcase their businesses and progress. This lends itself to insightful material for e-newsletter publications on top of social media sharing and regular updates.'],
        name: 'Loopnest',
        description: 'Tap into the digital economy'
      },
      'belsona': {
        info: ['Denis Meltsaev, CTO, Moscow, Russia',
          'Vassily Godunov, back-end developer, Moscow, Russia',
          'Georgy Yakovlev, front-end developer, Budva, Montenegro',
          'Artem Potapov, System Administrator, Saint-Petersburg, Russia',
          'Igor Peskov, financial analyst, Moscow, Russia',
          'Usanov Alexei, media relations, Kiev, Ukraine'],
        config: ['RAM 192 GB, 32 CPUs, SSD 3.75 TB, 100Mbps bandwidth'],
        location: ['Amsterdam, Netherlands'],
        plan: ['We have a strong network. We are in contact with several projects and startups. Some of them are searching for suitable to their dapps ecosystem. We are friends with Belarus blockchain association. Quite often we participate in the blockchain conferences. We plan to showcase people Vite blockchain, explain why it is better than the others and help to migrate their project or understand how to do this.'],
        medium: ['We have 2 big social media: Telegram channel (https://t.me/ICOFanatics) and Twitter (https://twitter.com/icofanatics). Where we follow the projects we like and share news with our community. Of course, we will provide a media coverage to all news and events about Vite'],
        name: 'Belsona Investment Group LP',
        description: 'In VITE we trust'
      }
    }
  },
  team: {
    'core': 'Core Team',
    'advisor': 'Advisors',
    'nameMap': {
      'liuchunming': {
        'name': 'Charles',
        'position': '',
        'description': 'Veteran blockchain entrepreneur and technical expert. Standing director of China Blockchain Application Research Center. Graduated from China University of Science and Technology and the Institute of Software of the Chinese Academy of Sciences. Former senior architect of JD.com, co-founder of Coinport, and engineering director of Meituan Dianping. Abundant experience in distributed systems and high concurrency systems.'
      },
      'wangdong': {
        'name': 'Daniel Wang',
        'position': '',
        'description': 'Seasoned blockchain entrepreneur.  Graduated from China University of Science and Technology and Arizona State University.  Founder of Loopring, former Google America Tech Lead, Co-founder and VP of Yun Yun Wang, Senior Research and Development Director at JD.com, and Co-Founder of Coinport.'
      },
      'terenceLam': {
        'name': 'Terence Lam',
        'position': '',
        'description': 'Veteran investor.  Graduated from Harvard Business School.  Partner of Zhizi Blockchain Investment Fund.  Adjust professor of SPACE China business school at Hong Kong University.  20+ years’ experience as senior technical manager at Global 500 companies. Started many technology startups.'
      },
      'richard': {
        name: 'Richard',
        position: '',
        description: 'Seasoned Wall Street professional. Graduated B.A. from Dartmouth College and MBA from New York University.  Previously structured product trading strategist at Goldman Sachs and Vice President of Two Sigma\'s high-frequency platform and Business Innovation & Growth group.'
      },
      frank: {
        name: 'Frank Deng',
        position: '',
        description: 'Expert in digital and mobile marketing. Graduated from Tsinghua University. Served in Google Ads Operations Group, COO of Suizong Technology and co-founder of Yunke Technology.'
      },
      allen: {
        name: 'Allen Liu',
        position: '',
        description: 'Senior technical specialist. Graduated from China University of Science and Technology and Fudan University. Former HP Tech Lead; former IBM senior architect and product manager. Having 10 years high concurrency experience in multinational firms. Scrum expert. PMP.'
      },
      zhangli: {
        name: 'Li Zhang',
        position: '',
        description: 'Senior blockchain practitioner, investor. LinkVC Capital Partners, former CMO of F2pool , former business officer of Huobi.'
      },
      mirza: {
        name: 'Mirza Uddin',
        position: '',
        description: 'Mirza was previously a venture capitalist at Two Sigma, one of the largest quantitative hedge funds, where he was heavily involved in researching Blockchain startups. He also previously worked for Index Ventures and The Boston Consulting Group. Mirza earned his BA from Harvard University.'
      },
      ivan: {
        name: 'Ivan Golovko',
        position: '',
        description: 'VP Strategy and Investor Relations of LegalThings One. Co-founder of Distributed.Fund and Distributed Alliance. Former CMO of ICODrops.'
      },
      leo: {
        name: 'Leo',
        position: '',
        description: 'Seasoned blockchain investor and senior technical expert. Previously led engineering efforts at Meituan and Coinport.'
      }
    }
  },
  superNodes: {
    'title': 'Guide for SBP',
    'contents': [{
      'orderNum': 'I.',
      'question': 'Information you need to submit',
      'answer': [
        '1. Name and logo for the supernode. These are necessary, as it helps create an identity for you within the community. ',
        '2. Email address for the entity that will operate the SBP. ',
        '3. Campaign slogan. ',
        '4. Information about the team: a list of key members and their backgrounds (please include profile photos and location of residence). ',
        '5. Setup specifications of your data center. (Recommended: 8 core, 16GB RAM, 100Mbps)',
        '6. Location of your server. ',
        "7. Please describe in detail how you plan to add value to Vite's ecosystem after becoming a SBP.",
        "8. Plans for gaining social media exposure (significant presence within our social media reflects a certain level of commitment to nurturing the growth of Vite's community). <br/>Link for submitting your information: <a href='https://docs.google.com/forms/d/1u2HC3ecC3rkQk58Kn9D8eBNhN8DpkAB2DMY06QNzHvk/viewform?edit_requested=true' target='_blank'>https://docs.google.com/forms/d/1u2HC3ecC3rkQk58Kn9D8eBNhN8DpkAB2DMY06QNzHvk/viewform?edit_requested=true</a>"
      ]
    }, {
      'orderNum': 'II.',
      'question': 'Registration of SBP, Voting and Creating Blocks',
      'second': [{
        'title': 'Follow these steps to register a supernode and prepare for election:',
        'answer': [
          '1. Migrate the Vite ERC20 tokens you wish to stake for your SBP. <br/> In mid-November, migrate your ERC20 Vite tokens to the Vite TestNet via the smart contract provided by Vite. ',
          '2. Stake 500,000 VITE (this amount will increase to 1,000,000 VITE after the MainNet is launched). These tokens will be locked for 3 months, as required for SBPs. ',
          '3. Receive at least 200,000 votes (each vote is represented by one VITE). With each new community supernode that receives a minimum of 200,000 votes, Vite will stop one of its own official supernodes running. The community supernode will become the new supernode. ',
          '4. Run the server for the SBP (more detailed information will be released later)'
        ]
      }, {
        'title': 'Voting',
        'answer': [
          '1. Each VITE can only be used to vote for one SBP. ',
          '2. Each address can only be used to vote for one SBP. The number of votes from that address will equal the entire amount of VITE held in that address. ',
          '3. Voting from a given address does not lock up the VITE tokens stored at that address. These tokens may be transferred at any time, however, it would inherently affect the total number of votes going towards the supernode.',
          "4. The user may change their unique address's voting target. The change will take effect within 75 seconds at most. "
        ]
      }, {
        'title': 'Rules for Creating Blocks',
        'answer': [
          'The first 100 supernodes will be responsible for creating blocks. For each round (lasting 75 seconds), the first 25 nodes have a 23/25 chance to create a block, and the last 75 nodes have a 2/75 chance. The block creation rate will affect the final rewards for the supernodes.'
        ]
      }]
    }, {
      'orderNum': 'III.',
      'question': 'Responsibilities of SBPs',
      'answer': [
        '1. SBPs ensure that the Vite system functions properly. SBPs must pack transactions in the entire network and ensure stability of the system by providing usable server resources. In addition, operators of the SBPs are also expected to provide technical support for the Vite system to the best of their abilities.',
        '2. SBPs are representatives, evangelists, and leaders of the Vite community and are expected to take actions to build and preserve an active and healthy community. ',
        '3. The prosperity of the Vite community goes hand in hand with the success of the Vite ecosystem. SBPs are expected to evangelize Vite, and help create dApps based on Vite. '
      ]
    }, {
      'orderNum': 'IV.',
      'question': 'Incentive Plan',
      'answer': [
        '1. Forging SBPs in TestNet stage will share annual forging rewards, equivalent to 3% of the total issued token amount. This translates to 30 million VITE (3% of the current total supply of 1 billion VITE). ',
        "2. supernode rewards are divided into two parts: 50% for creating blocks and 50% for voting. Among the 30 million token rewards per year, 15 million are awarded to the supernodes that create blocks, and 15 million are awarded to the supernodes that were elected by the community (in TestNet stage, this will be the top 100 supernodes).<br/>If a supernode were to keep mining for one year, it could get 600,000 VITE from the block creation reward ((30 million / 25 nodes) * 50%), plus the reward from voting.<br/> Voting reward calculation: according to the supernode's stake and voting ratio, (the node staking tokens + voting) / (all supernode staking tokens + all voting) * (voting reward). Each round will be 75 seconds. The daily sum would be multiplied by the block rate.<br/>A single supernode daily reward would be: 1,643.835 VITEs of blocks creation rewards, plus additional staking/voting rewards",
        '3. There are many Airdrop plans and rewards for the TestNet stage. We will increase the number of tokens issued to reward SBPs after the MainNet is launched.',
        '4. Reward Extraction, Only the rewards from the previous day can be extracted.'
      ]
    }, {
      'orderNum': 'V.',
      'question': 'An explanation of the VITE token in TestNet',
      'answer': [
        '1. The VITE tokens in TestNet are used for SBP election and voting. They are added to the network from the mapping of VITE ERC20 tokens.',
        '2. The transfer of VITE ERC 20 tokens to VITE TestNet tokens cannot be reverted. You will not be able to circulate the TestNet tokens on the secondary market in the short term.',
        '3. After the MainNet is launched, VITE tokens on the TestNet and VITE ERC20 tokens will both be converted to VITE tokens on the MainNet. '
      ]
    }]
  },
  faq: {
    'title': 'VITE Q&A',
    'questions': [
      {
        'question': 'What is Vite?',
        'answer': [
          'Vite is a general-purpose platform for decentralized applications.  It is designed to support industrial-strength applications by offering high throughput, low latency and scalability while also providing security.',
          'The Vite team are dedicated to addressing current performance and scalability issues of infrastructural chains, so that truly practical applications with high-frequency data requirements can be built in a blockchain framework.'
        ]
      },
      {
        'question': 'What is the relationship between Vite and Loopring?',
        'answer': [
          'Loopring is our strategic investor, and its founder Daniel Wang serves as Vite’s advisor.  Loopring’s decentralized exchange function will be offered in a wallet application built on the Vite platform. Loopring will be the first practical use case for the Vite platform.'
        ]
      },
      {
        question: 'Will there be airdrops for Vite? In what way?',
        answer: [
          'There will be. Stay tuned for amount and mechanism.'
        ]
      },
      {
        question: 'Which exchange(s) will Vite be listed on?',
        answer: [
          'We are in contact with multiple exchanges, but there is no specific timetable.  Vite is a long-term, tech-driven project, and we don’t plan to run our operations at an aggressive pace.'
        ]
      },
      {
        question: 'What is the public WeChat account of Vite?',
        answer: [
          'Our official account: vitelabs'
        ],
        key: 'wechat'
      },
      {
        question: 'What is Vite’s biggest innovation as compared to other public chains?',
        answer: [
          'The biggest innovation is the asynchronous design, which can be understood in three aspects: ',
          'First, we are introducing the concept of asynchronous design into smart contracts.  The Nano project (one of three well-known chains that use DAG) separates a transfer action into a send and a receive transaction. We are building upon this mechanism, and will separate the call and the response of a smart contract, so they can take place asynchronously.',
          'Second, the writing and verification of a transaction also happen asynchronously in Vite.  In traditional blockchain setup (e.g., Bitcoin), the speed of writing transactions into a ledger is limited by the speed of packing.  But Vite allows writing of many transactions into the ledger within the constraints of the TPS.  Because the asynchronous setup allows the transactions to happen at an even speed, this reduces the peaks and troughs of the speed of transaction writing, thus optimizing usage of resources and increasing system throughput.  Also, the transactions of two users will no longer be blocked; that is, we will no longer see a scenario where a user sends a large amount of transactions that prevents the transactions of other users from taking place.',
          'Third, calls between contracts will also happen asynchronously in Vite.  The calls between smart contracts in Ethereum are implemented through messaging (aka insider transactions); and the calls either all succeed or all fail, as per an atomic ACID semantic.  To solve for this bottleneck in performance, we take a page from well-developed solutions in centralized Internet technologies, and will make use of a message-driven architecture.  As such, contracts do not share states and communicate via messages.'
        ]
      },
      {
        question: 'Since smart contracts in Vite don’t support synchronous calls, how will such calls in Ethereum be compatible with Vite?',
        answer: 'Unfortunately, these calls are not compatible with Vite.  Synchronous calls need to be changed to asynchronous calls to work in Vite.'
      },
      {
        question: 'What is the difference between Vite\'s Solidity++ and Ethereum’s Solidity?',
        answer: [
          'On a high level, the differences are similar to those of C and C++.  In basic syntax, the two languages are largely compatible.  The largest difference is in the synchronous (Ethereum) vs asynchronous (Vite) calls as mentioned earlier.',
          'In addition, a series of standard libraries, such as string manipulation, floating-point operations, basic mathematical operations, containers, and sorting will be provided in Solidity++.'
        ]
      },
      {
        question: 'The message-based architecture has an advantage of high throughput and scalability. However, this comes at a cost of more complex programming model, which may not guarantee strong consistency, and may lead to even higher latencies.  How does Vite reduce both the complexity in programming model and latencies?',
        answer: [
          'Vite will provide Solidity++ contract language and a complete SDK to reduce the cost of asynchronous programming.',
          'After rigorous research, we find that in practical use cases, strong consistency semantics can be replaced by BASE semantics. Since the HDPoS consensus algorithm of Vite can guarantee transaction confirmation within 1 second, any potential latency increase is still under control.'
        ]
      },
      {
        question: 'What is the significance of Snapshot Chain?',
        answer: [
          'Vite employs a ledger structure called block-lattice. Each account corresponds to a blockchain and each transaction refers to the hash of the previous transaction in the account. Transactions are divided into two types: "request transactions" and "response transactions.”  A response transaction needs to quote the corresponding hash of the request transaction.',
          'The DAG structure has an inherent deficiency in security.   This is because transactions are grouped by accounts, and each transaction is only attached to the chain associated with the relevant account. Transactions generated by other accounts do not automatically become the subsequent nodes of the previous transaction. Therefore, for some transactions, the rollback probability will not drop over time.  The Snapshot chain technology is meant to address this issue.'
        ]
      },
      {
        question: 'Does the inter-chain protocol only support exchange of assets?',
        answer: [
          'Yes.  Vite will support value transfers between different chains but not other inter-chain functions such as message transfers or smart contract calls between chains.'
        ]
      },
      {
        question: 'The whitepaper mentions that Vite’s development tools are similar to, and have features extended from, those of Ethereum.  Does this indicate that dApp’s for Ethereum can be deployed on Vite with minor changes?',
        answer: [
          'Yes, one of Vite’s goals is to reduce the cost of porting over dApps from Ethereum.  Vite tries to maximize compatibility with EVM.'
        ]
      },
      {
        question: 'Can Vite’s smart contracts support running on a mobile device?  Will they be similar to Qtum and support mainstream languages like C++ and Java?',
        answer: [
          'Vite won’t support mobile.  There are no current plans to support other languages.  In the future, we will set up a VM Lab to continue research in smart contract language and virtual machine.  We welcome participation from experts in these areas.'
        ]
      }
    ]
  },
  investor: {
    title: 'Our investors'
  },
  urls: {
    telegram: {
      ann: 'Announcement Channel',
      english: 'English',
      chinese: 'Chinese',
      vietnamese: 'Vietnamese',
      korean: 'Korean',
      russia: 'Russia',
      thailand: 'Thailand'
    },
    whitePaper: 'White Paper',
    whitePaperList: {
      english: 'English',
      chinese: 'Chinese',
      french: 'French',
      korean: 'Korean',
      vietnamese: 'Vietnamese',
      russian: 'Russian'
    },
    document: 'Documentation',
    loopring: 'Loopring',
    faq: 'FAQ',
    medium: 'Medium',
    introduction: 'Introduction',
    tokenUrl: 'ERC20 Address',
    btt: 'Bitcointalk',
    telegramEn: 'Telegram English',
    telegramZh: 'Telegram Chinese',
    telegramAnn: 'Telegram ',
    youtube: 'Youtube',
    blog: 'Technology Blog'
  },
  urlSrc: {
    telegram: 'https://t.me/vite_en',
    whitePaper: '/whitepaper/vite_en.pdf',
    introduction: 'https://vite.wiki/introduction/'
  },
  utils: {
    readMore: 'Read More'
  },
  footer: {
    learning: 'Learn',
    about: 'About',
    media: 'Media'
  },
  joinMailing: {
    title: 'Subscribe to our mailing list',
    button: 'Subscribe',
    placeholder: 'Email Address'
  }
}
