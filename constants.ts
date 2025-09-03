
import { UserProfile } from './types';

export const MOCK_PROFILES: UserProfile[] = [
  {
    id: 1,
    name: 'Lalnunpuii',
    age: 28,
    gender: 'Female',
    photoUrl: 'https://picsum.photos/id/1027/400/400',
    isPhotoBlurred: false,
    isVerified: false,
    religion: 'Kristian',
    caste: 'Brahmin', // (Context specific, left as is)
    location: 'Aizawl, Mizoram',
    education: 'MBA in Finance',
    occupation: 'Investment Banker',
    income: '₹ 50 Lakhs+',
    familyDetails: 'A pa sorkar atanga a pension tawh, a nu hi inchhungkhur enkawltu a ni. Nau mipa pakhat, nupui nei tawh a nei.',
    lifestyle: { diet: 'Chawnghilh', drinking: 'In ngai lo', smoking: 'Zu ngai lo' },
    bio: 'Tunlai nunphung leh hnam nun ze mawi pawl thiam mi ka ni. Hmasawn duhna thinlung pu, mi hlim thei leh zin veivah nuam ti mi ka ni. Mi hrethiam, min tawmpuitu, leh fiamthu duh mi kawppui tur ka zawng a ni.',
    partnerPreferences: 'Lehkha thiam, eizawnna ngelnghet nei, kum 29-33 inkar, chhungkaw tha tak atanga sei lian. Zuk leh hmuam ti lo leh chhungkua ngai pawimawh mi ni se.'
  },
  {
    id: 2,
    name: 'Rohlupuia',
    age: 32,
    gender: 'Male',
    photoUrl: 'https://picsum.photos/id/1005/400/400',
    isPhotoBlurred: false,
    isVerified: true,
    religion: 'Kristian',
    caste: 'Kshatriya', // (Context specific, left as is)
    location: 'Lunglei, Mizoram',
    education: 'M.Tech in Computer Science',
    occupation: 'Software Architect',
    income: '₹ 70 Lakhs+',
    familyDetails: 'A pa sumdawng mi a ni a, a nu hi professor a ni. U nu pakhat, US-a awm a nei.',
    lifestyle: { diet: 'Sa ei', drinking: 'A chang changin', smoking: 'Zu ngai lo' },
    bio: 'Khawl lam thil ngaina mi, coding, tlang lawn leh chawhmeh thar tem nuam ti mi ka ni. Inzah tawnna leh inbiakpawhna tha hi inlaichinnaah a pawimawh berah ka ngai.',
    partnerPreferences: 'Hnathawk, mahnia ding thei, leh mi hlim thei, kan tuizawng inang tlangpui kawppui tur ka zawng. Kum: 27-31.'
  },
  {
    id: 3,
    name: 'Zorinmawii',
    age: 26,
    gender: 'Female',
    photoUrl: 'https://picsum.photos/id/1011/400/400',
    isPhotoBlurred: true,
    isVerified: true,
    religion: 'Kristian',
    caste: 'Patel', // (Context specific, left as is)
    location: 'Champhai, Mizoram',
    education: 'B.Des in Fashion Design',
    occupation: 'Fashion Designer',
    income: '₹ 20 Lakhs+',
    familyDetails: 'Chhungkaw inpumkhat. A pa leh a patea ten an chhungkaw sumdawnna an kalpui. Unau pahnih a nei.',
    lifestyle: { diet: 'Chawnghilh', drinking: 'In ngai lo', smoking: 'Zu ngai lo' },
    bio: 'Thil thar siam chhuak thei, beiseina nei tlat leh chhungkua ngaina mi ka ni. Thil tê têah hlimna ka hmu a, ka chhungte leh thiante nena hun hman nuam ka ti. Kut themthiamna lam leh design hi ka tuipui zawng tak a ni.',
    partnerPreferences: 'Chhungkua ngaina, eizawnna ngelnghet nei, upa zah thiam leh hnam nunphung vawng nungtu kawppui tur ka zawng. Chawnghilh leh zuk leh hmuam ti lo ni thei se.'
  },
  {
    id: 4,
    name: 'Lalmuanpuia',
    age: 34,
    gender: 'Male',
    photoUrl: 'https://picsum.photos/id/1012/400/400',
    isPhotoBlurred: false,
    isVerified: false,
    religion: 'Muslim', // (Context specific, left as is)
    caste: 'Sunni', // (Context specific, left as is)
    location: 'Hyderabad, India',
    education: 'MBBS, MD',
    occupation: 'Doctor (Cardiologist)',
    income: '₹ 80 Lakhs+',
    familyDetails: 'A pa professor pension a ni a, a nu hi inchhungkhur enkawltu a ni. Nau nu pakhat, Masters zirlai a nei.',
    lifestyle: { diet: 'Sa ei', drinking: 'In ngai lo', smoking: 'Zu ngai lo' },
    bio: 'Midang puih duhna thinlung pu, a hnathawh ngai pawimawh em em tu ka ni. Ka hun awlah lehkhabu chhiar, chess khelh, leh motor-a tlan kual mai mai hi nuam ka ti.',
    partnerPreferences: 'Lehkha thiam, lainatna ngah, leh mi hrethiam, chhungkaw tha tak atanga sei lian kawppui tur ka zawng. Pathian tih mi leh chhungkaw pawimawhna hria ni se.'
  },
    {
    id: 5,
    name: 'Malsawmdawngi',
    age: 29,
    gender: 'Female',
    photoUrl: 'https://picsum.photos/id/1013/400/400',
    isPhotoBlurred: false,
    isVerified: true,
    religion: 'Sikh', // (Context specific, left as is)
    caste: 'Jat', // (Context specific, left as is)
    location: 'Chandigarh, India',
    education: 'Ph.D. in Psychology',
    occupation: 'University Professor',
    income: '₹ 35 Lakhs+',
    familyDetails: 'A pa sipai pension a ni a, a nu hi school principal a ni. Unau a nei lo.',
    lifestyle: { diet: 'Chawnghilh', drinking: 'In ngai lo', smoking: 'Zu ngai lo' },
    bio: 'Lehkha zir mi ka ni a, zirtir leh research tih hi ka nuam tih zawng tak a ni. Mi zaidam, dawhthei, leh thil thar zir chak mi ka ni. Thil ril zawk sawihona leh nun giản tak hman nuam ka ti.',
    partnerPreferences: 'Finna lama kan inmilpui tur, puitling, leh min tawmpuitu kawppui tur ka zawng. Zirna lam mi emaw eizawnna ngelnghet nei ni thei se.'
  },
  {
    id: 6,
    name: 'Vanlalruata',
    age: 31,
    gender: 'Male',
    photoUrl: 'https://picsum.photos/id/1014/400/400',
    isPhotoBlurred: true,
    isVerified: true,
    religion: 'Kristian',
    caste: 'Reddy', // (Context specific, left as is)
    location: 'Bangalore, India',
    education: 'B.E. from IIT Madras',
    occupation: 'AI Startup Dintu',
    income: '₹ 1 Crore+',
    familyDetails: 'A nu leh pa Chennai-ah an awm. A pa in software company a nei. Upa mipa pakhat Australia-ah a awm.',
    lifestyle: { diet: 'Sa ei', drinking: 'A hun-ah chauh', smoking: 'Zu ngai lo' },
    bio: 'Sumdawng mi, technology leh thil thar siam chhuah duhnaa khat ka ni. Hna ka thawkrim a, chawlhni-ah chuan thiante nen, infiamna hmangin emaw, film tha tak enin emaw hahdam nuam ka ti.',
    partnerPreferences: 'Hmeichhe fing, tumruh, leh mahnia ding thei, nun kawng zawhpuia thian ni thei tur ka zawng.'
  }
];
