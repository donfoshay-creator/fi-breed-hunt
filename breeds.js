// Fi Breed Hunt - Complete Dog Breed Database with Rarity Tiers
// Rarity tiers: Common (10pts), Uncommon (25pts), Rare (50pts), Epic (100pts), Legendary (250pts), Mythic (500pts)

const RARITY = {
  COMMON: { name: 'Common', points: 10, color: '#8B9DAF', bgColor: '#E8ECF0', emoji: '' },
  UNCOMMON: { name: 'Uncommon', points: 25, color: '#4CAF50', bgColor: '#E8F5E9', emoji: '' },
  RARE: { name: 'Rare', points: 50, color: '#2196F3', bgColor: '#E3F2FD', emoji: '' },
  EPIC: { name: 'Epic', points: 100, color: '#9C27B0', bgColor: '#F3E5F5', emoji: '' },
  LEGENDARY: { name: 'Legendary', points: 250, color: '#FF9800', bgColor: '#FFF3E0', emoji: '' },
  MYTHIC: { name: 'Mythic', points: 500, color: '#E91E63', bgColor: '#FCE4EC', emoji: '' },
};

const BREEDS = [
  // === COMMON (10 pts) - Most popular breeds, seen everywhere ===
  { id: 1, name: 'Labrador Retriever', rarity: 'COMMON', image: '', description: 'America\'s most popular breed. Friendly, outgoing, and active.', funFact: 'Labs have been the #1 most popular breed for over 30 years.' },
  { id: 2, name: 'Golden Retriever', rarity: 'COMMON', image: '', description: 'Intelligent, friendly, and devoted. A family favorite.', funFact: 'Golden Retrievers can carry an egg in their mouth without breaking it.' },
  { id: 3, name: 'German Shepherd', rarity: 'COMMON', image: '', description: 'Confident, courageous, and smart. Top working dog.', funFact: 'German Shepherds were the first guide dogs for the blind.' },
  { id: 4, name: 'French Bulldog', rarity: 'COMMON', image: '', description: 'Playful, smart, and adaptable. The ultimate city dog.', funFact: 'Frenchies can\'t swim due to their front-heavy structure.' },
  { id: 5, name: 'Poodle', rarity: 'COMMON', image: '', description: 'Proud, active, and very smart. Comes in three sizes.', funFact: 'Poodles were originally bred as water retrievers in Germany.' },
  { id: 6, name: 'Beagle', rarity: 'COMMON', image: '', description: 'Merry, friendly, and curious. A great scent hound.', funFact: 'Beagles have about 220 million scent receptors.' },
  { id: 7, name: 'Bulldog', rarity: 'COMMON', image: '', description: 'Calm, courageous, and friendly. A gentle companion.', funFact: 'Bulldogs were originally bred for bull-baiting in England.' },
  { id: 8, name: 'Yorkshire Terrier', rarity: 'COMMON', image: '', description: 'Feisty, brave, and affectionate. A tiny but mighty terrier.', funFact: 'Yorkies were originally bred to catch rats in clothing mills.' },
  { id: 9, name: 'Dachshund', rarity: 'COMMON', image: '', description: 'Curious, friendly, and spunky. The iconic wiener dog.', funFact: 'Dachshunds were bred to hunt badgers underground.' },
  { id: 10, name: 'Boxer', rarity: 'COMMON', image: '', description: 'Fun-loving, bright, and active. An upbeat family dog.', funFact: 'Boxers are known for their "kidney bean" dance when excited.' },
  { id: 11, name: 'Chihuahua', rarity: 'COMMON', image: '', description: 'Charming, graceful, and sassy. The smallest breed.', funFact: 'Chihuahuas have the largest brain-to-body ratio of any dog.' },
  { id: 12, name: 'Shih Tzu', rarity: 'COMMON', image: '', description: 'Affectionate, playful, and outgoing. A born companion.', funFact: 'Shih Tzus were bred to resemble lions in Chinese folklore.' },
  { id: 13, name: 'Cavalier King Charles', rarity: 'COMMON', image: '', description: 'Gentle, graceful, and affectionate. A royal companion.', funFact: 'Named after King Charles II who was never without his spaniels.' },
  { id: 14, name: 'Goldendoodle', rarity: 'COMMON', image: '', description: 'Friendly, intelligent, and hypoallergenic. A popular mix.', funFact: 'Goldendoodles were first bred in the 1990s as guide dogs.' },
  { id: 15, name: 'Australian Shepherd', rarity: 'COMMON', image: '', description: 'Smart, work-oriented, and exuberant. A tireless herder.', funFact: 'Despite the name, Aussies were developed in the American West.' },

  // === UNCOMMON (25 pts) - Well-known but less frequently seen ===
  { id: 16, name: 'Siberian Husky', rarity: 'UNCOMMON', image: '', description: 'Loyal, outgoing, and mischievous. Born to run.', funFact: 'Huskies can run up to 100 miles per day in sled races.' },
  { id: 17, name: 'Doberman Pinscher', rarity: 'UNCOMMON', image: '', description: 'Loyal, fearless, and alert. An elegant protector.', funFact: 'Created by a German tax collector who needed protection on rounds.' },
  { id: 18, name: 'Great Dane', rarity: 'UNCOMMON', image: '', description: 'Friendly, patient, and dependable. A gentle giant.', funFact: 'The tallest dog ever recorded was a Great Dane at 44 inches.' },
  { id: 19, name: 'Bernese Mountain Dog', rarity: 'UNCOMMON', image: '', description: 'Good-natured, calm, and strong. A beautiful working dog.', funFact: 'Berners were bred to pull carts of cheese and milk in Switzerland.' },
  { id: 20, name: 'Pembroke Welsh Corgi', rarity: 'UNCOMMON', image: '', description: 'Affectionate, smart, and alert. The Queen\'s favorite.', funFact: 'Legend says fairies used Corgis as battle steeds.' },
  { id: 21, name: 'Cocker Spaniel', rarity: 'UNCOMMON', image: '', description: 'Gentle, smart, and happy. A merry companion.', funFact: 'The name "Cocker" comes from hunting woodcock birds.' },
  { id: 22, name: 'Miniature Schnauzer', rarity: 'UNCOMMON', image: '', description: 'Friendly, smart, and obedient. A spirited little dog.', funFact: 'Schnauzers were bred as ratters and guard dogs on German farms.' },
  { id: 23, name: 'Havanese', rarity: 'UNCOMMON', image: '', description: 'Intelligent, outgoing, and funny. Cuba\'s national dog.', funFact: 'Havanese were favorites of Cuban aristocrats in the 1800s.' },
  { id: 24, name: 'Pomeranian', rarity: 'UNCOMMON', image: '', description: 'Inquisitive, bold, and lively. A foxy-faced charmer.', funFact: 'Queen Victoria owned a very small Pom, popularizing the tiny size.' },
  { id: 25, name: 'Shetland Sheepdog', rarity: 'UNCOMMON', image: '', description: 'Bright, playful, and energetic. A miniature Collie.', funFact: 'Shelties are one of the top breeds in agility competitions.' },
  { id: 26, name: 'Boston Terrier', rarity: 'UNCOMMON', image: '', description: 'Friendly, bright, and amusing. The American Gentleman.', funFact: 'Boston Terriers were the first American breed recognized by the AKC.' },
  { id: 27, name: 'Maltese', rarity: 'UNCOMMON', image: '', description: 'Gentle, playful, and charming. An ancient companion.', funFact: 'Ancient Greeks built tombs for their beloved Maltese dogs.' },
  { id: 28, name: 'Border Collie', rarity: 'UNCOMMON', image: '', description: 'Energetic, smart, and hardworking. The world\'s best herder.', funFact: 'Border Collies are widely considered the most intelligent breed.' },
  { id: 29, name: 'Weimaraner', rarity: 'UNCOMMON', image: '', description: 'Friendly, fearless, and obedient. The Gray Ghost.', funFact: 'Weimaraners were bred by German royalty to hunt large game.' },
  { id: 30, name: 'Labradoodle', rarity: 'UNCOMMON', image: '', description: 'Friendly, energetic, and good-natured. A beloved hybrid.', funFact: 'The Labradoodle was created in 1989 as a hypoallergenic guide dog.' },

  // === RARE (50 pts) - Known breeds but harder to find ===
  { id: 31, name: 'Dalmatian', rarity: 'RARE', image: '', description: 'Dignified, smart, and outgoing. The firehouse dog.', funFact: 'Dalmatian puppies are born completely white with no spots.' },
  { id: 32, name: 'Akita', rarity: 'RARE', image: '', description: 'Courageous, dignified, and loyal. Japan\'s noble guardian.', funFact: 'The famous Hachiko was an Akita who waited for his owner for 9 years.' },
  { id: 33, name: 'Bull Terrier', rarity: 'RARE', image: '', description: 'Playful, charming, and mischievous. The egg-headed clown.', funFact: 'Bull Terriers are the only breed with triangle-shaped eyes.' },
  { id: 34, name: 'Whippet', rarity: 'RARE', image: '', description: 'Calm, affectionate, and playful. The poor man\'s racehorse.', funFact: 'Whippets can reach speeds of 35 mph, making them the fastest for their size.' },
  { id: 35, name: 'Samoyed', rarity: 'RARE', image: '', description: 'Adaptable, friendly, and gentle. The smiling Sammie.', funFact: 'Samoyed fur can be spun into yarn and knitted into clothing.' },
  { id: 36, name: 'Irish Wolfhound', rarity: 'RARE', image: '', description: 'Courageous, dignified, and calm. The tallest of all breeds.', funFact: 'Irish Wolfhounds were once used to hunt wolves in Ireland.' },
  { id: 37, name: 'Basenji', rarity: 'RARE', image: '', description: 'Independent, smart, and poised. The barkless dog.', funFact: 'Basenjis don\'t bark — they yodel! Known as the "barkless dog."' },
  { id: 38, name: 'Shiba Inu', rarity: 'RARE', image: '', description: 'Alert, attentive, and bold. Japan\'s most popular companion.', funFact: 'The Shiba Inu is the basis for the famous "Doge" meme.' },
  { id: 39, name: 'Afghan Hound', rarity: 'RARE', image: '', description: 'Dignified, aloof, and aristocratic. A sight to behold.', funFact: 'Afghan Hounds are one of the oldest known dog breeds.' },
  { id: 40, name: 'Rhodesian Ridgeback', rarity: 'RARE', image: '', description: 'Dignified, affectionate, and even-tempered. The lion dog.', funFact: 'Ridgebacks were bred in Africa to keep lions at bay.' },
  { id: 41, name: 'Irish Setter', rarity: 'RARE', image: '', description: 'Active, outgoing, and sweet-natured. A red beauty.', funFact: 'Irish Setters were once exclusively used by Irish hunters.' },
  { id: 42, name: 'Borzoi', rarity: 'RARE', image: '', description: 'Affectionate, loyal, and regally dignified. A Russian aristocrat.', funFact: 'Borzoi were originally bred by Russian aristocracy to hunt wolves.' },
  { id: 43, name: 'Old English Sheepdog', rarity: 'RARE', image: '', description: 'Adaptable, gentle, and smart. The lovable shaggy dog.', funFact: 'OES tails were docked to show they were working dogs, avoiding pet tax.' },
  { id: 44, name: 'Newfoundland', rarity: 'RARE', image: '', description: 'Sweet, patient, and devoted. A gentle swimming giant.', funFact: 'Newfoundlands have webbed feet and are natural lifeguards.' },
  { id: 45, name: 'Chinese Crested', rarity: 'RARE', image: '', description: 'Affectionate, alert, and lively. Hairless or powderpuff.', funFact: 'Chinese Crested dogs are actually from Africa, not China.' },

  // === EPIC (100 pts) - Unusual breeds, rarely encountered ===
  { id: 46, name: 'Xoloitzcuintli', rarity: 'EPIC', image: '', description: 'Loyal, alert, and calm. The ancient Aztec dog.', funFact: 'Xolos are over 3,000 years old and were sacred to the Aztecs.' },
  { id: 47, name: 'Norwegian Lundehund', rarity: 'EPIC', image: '', description: 'Alert, energetic, and loyal. The puffin dog.', funFact: 'Lundehunds have 6 toes on each foot and can close their ears shut.' },
  { id: 48, name: 'Komondor', rarity: 'EPIC', image: '', description: 'Brave, independent, and loyal. The mop dog.', funFact: 'Komondor cords can take 2+ years to fully form.' },
  { id: 49, name: 'Bergamasco Sheepdog', rarity: 'EPIC', image: '', description: 'Independent, sociable, and intelligent. The matted marvel.', funFact: 'Their unique coat forms natural "flocks" that never need brushing.' },
  { id: 50, name: 'Azawakh', rarity: 'EPIC', image: '', description: 'Loyal, independent, and deeply affectionate. A Saharan sighthound.', funFact: 'Azawakhs are one of the few breeds that can tolerate extreme heat.' },
  { id: 51, name: 'Thai Ridgeback', rarity: 'EPIC', image: '', description: 'Tough, independent, and loyal. An ancient Southeast Asian breed.', funFact: 'Only 3 breeds in the world have a ridge on their backs.' },
  { id: 52, name: 'Otterhound', rarity: 'EPIC', image: '', description: 'Boisterous, amiable, and even-tempered. A rare British hound.', funFact: 'Fewer than 1,000 Otterhounds exist worldwide.' },
  { id: 53, name: 'Peruvian Inca Orchid', rarity: 'EPIC', image: '', description: 'Loyal, affectionate, and noble. An ancient hairless breed.', funFact: 'Incas believed these dogs had mystical healing powers.' },
  { id: 54, name: 'Lagotto Romagnolo', rarity: 'EPIC', image: '', description: 'Keen, undemanding, and affectionate. The truffle dog.', funFact: 'The only breed specifically bred to find truffles.' },
  { id: 55, name: 'Finnish Spitz', rarity: 'EPIC', image: '', description: 'Friendly, good-natured, and lively. The barking bird dog.', funFact: 'Finland holds "King of the Barkers" contests for this breed.' },
  { id: 56, name: 'Canaan Dog', rarity: 'EPIC', image: '', description: 'Alert, vigilant, and devoted. Israel\'s national breed.', funFact: 'Canaan Dogs are one of the oldest breeds, dating back to biblical times.' },
  { id: 57, name: 'Puli', rarity: 'EPIC', image: '', description: 'Loyal, obedient, and agile. The acrobatic mop dog.', funFact: 'Mark Zuckerberg has a Puli named Beast.' },
  { id: 58, name: 'Pharaoh Hound', rarity: 'EPIC', image: '', description: 'Friendly, smart, and noble. Malta\'s national dog.', funFact: 'Pharaoh Hounds are the only breed that can blush — their nose turns pink!' },
  { id: 59, name: 'Cirneco dell\'Etna', rarity: 'EPIC', image: '', description: 'Affectionate, friendly, and independent. Sicily\'s ancient hunter.', funFact: 'This breed has hunted on the slopes of Mount Etna for 3,000 years.' },
  { id: 60, name: 'Löwchen', rarity: 'EPIC', image: '', description: 'Affectionate, outgoing, and positive. The little lion dog.', funFact: 'Once the rarest breed in the world with only 65 dogs in 1973.' },

  // === LEGENDARY (250 pts) - Extremely rare, dream encounters ===
  { id: 61, name: 'Mudi', rarity: 'LEGENDARY', image: '', description: 'Versatile, keen, and lively. Hungary\'s best-kept secret.', funFact: 'Mudis are so rare that many Hungarians have never seen one.' },
  { id: 62, name: 'Stabyhoun', rarity: 'LEGENDARY', image: '', description: 'Gentle, patient, and willing. A Dutch farm dog treasure.', funFact: 'One of the rarest breeds in the world with only ~7,000 alive.' },
  { id: 63, name: 'Kai Ken', rarity: 'LEGENDARY', image: '', description: 'Intelligent, brave, and alert. Japan\'s tiger-striped dog.', funFact: 'Kai Ken are so rare in Japan that they\'re considered national monuments.' },
  { id: 64, name: 'Catalburun', rarity: 'LEGENDARY', image: '', description: 'Loyal, energetic, and rare. The split-nose pointer.', funFact: 'One of only 3 breeds with a split nose, almost never seen outside Turkey.' },
  { id: 65, name: 'Chinook', rarity: 'LEGENDARY', image: '', description: 'Smart, patient, and devoted. New Hampshire\'s sled dog.', funFact: 'In 1981, only 12 Chinooks existed in the world.' },
  { id: 66, name: 'Telomian', rarity: 'LEGENDARY', image: '', description: 'Alert, intelligent, and agile. Malaysia\'s only known breed.', funFact: 'Telomians can climb ladders — they evolved in stilt houses.' },
  { id: 67, name: 'Catahoula Leopard Dog', rarity: 'LEGENDARY', image: '', description: 'Independent, loyal, and watchful. Louisiana\'s state dog.', funFact: 'Catahoulas can have two different colored eyes (heterochromia).' },
  { id: 68, name: 'Carolina Dog', rarity: 'LEGENDARY', image: '', description: 'Loyal, independent, and primitive. America\'s wild dog.', funFact: 'Carolina Dogs were discovered living wild in South Carolina swamps.' },
  { id: 69, name: 'Tibetan Mastiff', rarity: 'LEGENDARY', image: '', description: 'Independent, reserved, and intelligent. A guardian of the Himalayas.', funFact: 'A Tibetan Mastiff sold for $1.95 million in China, the most expensive dog ever.' },
  { id: 70, name: 'Fila Brasileiro', rarity: 'LEGENDARY', image: '', description: 'Loyal, courageous, and determined. Brazil\'s ultimate guardian.', funFact: 'Filas are so loyal that "faithful as a Fila" is a Brazilian proverb.' },

  // === MYTHIC (500 pts) - Nearly impossible to find, ultimate prizes ===
  { id: 71, name: 'New Guinea Singing Dog', rarity: 'MYTHIC', image: '', description: 'Intelligent, agile, and elusive. A living fossil.', funFact: 'These dogs were thought extinct in the wild until rediscovered in 2020.' },
  { id: 72, name: 'Czechoslovakian Wolfdog', rarity: 'MYTHIC', image: '', description: 'Fearless, active, and loyal. Part wolf, all heart.', funFact: 'Created by crossing German Shepherds with Carpathian wolves in 1955.' },
  { id: 73, name: 'Phu Quoc Ridgeback', rarity: 'MYTHIC', image: '', description: 'Agile, intelligent, and loyal. Vietnam\'s island treasure.', funFact: 'Found only on Phu Quoc Island — one of the world\'s rarest breeds.' },
  { id: 74, name: 'Sapsali', rarity: 'MYTHIC', image: '', description: 'Loyal, gentle, and shaggy. Korea\'s ghost-chasing dog.', funFact: 'Koreans believed Sapsali could ward off ghosts and evil spirits.' },
  { id: 75, name: 'Tornjak', rarity: 'MYTHIC', image: '', description: 'Calm, reliable, and powerful. A Bosnian mountain guardian.', funFact: 'Nearly went extinct in the 1970s, saved by dedicated breeders.' },
];

// Spawn rate percentages (chance of appearing in each spawn cycle)
const SPAWN_RATES = {
  COMMON: 0.40,      // 40% chance
  UNCOMMON: 0.25,    // 25% chance
  RARE: 0.18,        // 18% chance
  EPIC: 0.10,        // 10% chance
  LEGENDARY: 0.05,   // 5% chance
  MYTHIC: 0.02,      // 2% chance
};

// Verify difficulty (chance AI fails to confirm breed from photo - rarer = harder)
const VERIFY_DIFFICULTY = {
  COMMON: 0.05,
  UNCOMMON: 0.10,
  RARE: 0.20,
  EPIC: 0.35,
  LEGENDARY: 0.50,
  MYTHIC: 0.65,
};

// Sighting flavor text for the GPS feed
const SIGHTING_MESSAGES = [
  'spotted near a park',
  'seen on a morning walk',
  'detected on a trail',
  'noticed in the neighborhood',
  'tracked passing through',
  'identified on an evening stroll',
  'seen near a dog-friendly cafe',
  'spotted at a local trail',
];

// Breed visual configs: [template, mainColor, accentColor]
// Templates: retriever, shepherd, bulldog, frenchie, terrier, spitz, hound,
//   sighthound, toy, giant, collie, poodle, dachshund, corgi, mop, hairless
const BREED_VISUALS = {
  1:  ['retriever', '#C4A265', '#A08040'],     // Labrador Retriever
  2:  ['retriever', '#DAA520', '#C49518'],     // Golden Retriever
  3:  ['shepherd', '#B8916E', '#2C2C2C'],      // German Shepherd
  4:  ['frenchie', '#D2B48C', '#E8D5B5'],      // French Bulldog
  5:  ['poodle', '#F5F5F5', '#E0E0E0'],        // Poodle
  6:  ['hound', '#C49B6A', '#2C2C2C'],         // Beagle
  7:  ['bulldog', '#D2B48C', '#F5DEB3'],        // Bulldog
  8:  ['terrier', '#B5894E', '#6E7B8B'],        // Yorkshire Terrier
  9:  ['dachshund', '#8B4513', '#654321'],      // Dachshund
  10: ['bulldog', '#C4A265', '#2C2C2C'],        // Boxer
  11: ['toy', '#D2B48C', '#F5DEB3'],            // Chihuahua
  12: ['toy', '#DAA520', '#F5F5F5'],            // Shih Tzu
  13: ['toy', '#8B4513', '#F5F5F5'],            // Cavalier King Charles
  14: ['retriever', '#DAA520', '#C49518'],      // Goldendoodle
  15: ['collie', '#6E7B8B', '#D2B48C'],         // Australian Shepherd
  16: ['spitz', '#A0A0A0', '#F5F5F5'],          // Siberian Husky
  17: ['shepherd', '#2C2C2C', '#8B4513'],       // Doberman Pinscher
  18: ['giant', '#C4A265', '#B8916E'],          // Great Dane
  19: ['giant', '#2C2C2C', '#C45C3A'],          // Bernese Mountain Dog
  20: ['corgi', '#E8A040', '#F5DEB3'],          // Pembroke Welsh Corgi
  21: ['hound', '#DAA520', '#B8860B'],          // Cocker Spaniel
  22: ['terrier', '#9E9E9E', '#616161'],        // Miniature Schnauzer
  23: ['toy', '#F5F5F5', '#E8D5A0'],            // Havanese
  24: ['spitz', '#FF8C00', '#FFB74D'],          // Pomeranian
  25: ['collie', '#B5894E', '#F5F5F5'],         // Shetland Sheepdog
  26: ['frenchie', '#2C2C2C', '#F5F5F5'],       // Boston Terrier
  27: ['toy', '#F5F5F5', '#F0E6D4'],            // Maltese
  28: ['collie', '#2C2C2C', '#F5F5F5'],         // Border Collie
  29: ['retriever', '#9E9E9E', '#8B8B8B'],      // Weimaraner
  30: ['retriever', '#F0E6D4', '#DAA520'],      // Labradoodle
  31: ['retriever', '#F5F5F5', '#333333'],      // Dalmatian
  32: ['spitz', '#E8A040', '#F5F5F5'],          // Akita
  33: ['terrier', '#F5F5F5', '#E8E8E8'],        // Bull Terrier
  34: ['sighthound', '#D2B48C', '#C4A265'],     // Whippet
  35: ['spitz', '#FAFAFA', '#F0F0F0'],          // Samoyed
  36: ['sighthound', '#9E9E9E', '#8B8B8B'],     // Irish Wolfhound
  37: ['spitz', '#8B4513', '#F5DEB3'],          // Basenji
  38: ['spitz', '#E8A040', '#F5DEB3'],          // Shiba Inu
  39: ['sighthound', '#DAA520', '#F0E6D4'],     // Afghan Hound
  40: ['retriever', '#C4A265', '#B8916E'],      // Rhodesian Ridgeback
  41: ['retriever', '#8B2500', '#6B1C00'],      // Irish Setter
  42: ['sighthound', '#F5F5F5', '#E8D5A0'],     // Borzoi
  43: ['mop', '#9E9E9E', '#F5F5F5'],            // Old English Sheepdog
  44: ['giant', '#2C2C2C', '#1A1A1A'],          // Newfoundland
  45: ['hairless', '#E8C0C0', '#D4A0A0'],       // Chinese Crested
  46: ['hairless', '#4A4A4A', '#666666'],        // Xoloitzcuintli
  47: ['spitz', '#B5894E', '#967841'],           // Norwegian Lundehund
  48: ['mop', '#F5F5F5', '#E8E8E8'],            // Komondor
  49: ['mop', '#9E9E9E', '#808080'],            // Bergamasco Sheepdog
  50: ['sighthound', '#D2B48C', '#C4A265'],     // Azawakh
  51: ['shepherd', '#6E7B8B', '#5A6777'],        // Thai Ridgeback
  52: ['hound', '#B5894E', '#9E9E9E'],          // Otterhound
  53: ['hairless', '#5A4A4A', '#888888'],        // Peruvian Inca Orchid
  54: ['retriever', '#8B6C4A', '#F5F5F5'],      // Lagotto Romagnolo
  55: ['spitz', '#CD6600', '#FFB74D'],          // Finnish Spitz
  56: ['spitz', '#D2B48C', '#F5DEB3'],          // Canaan Dog
  57: ['mop', '#2C2C2C', '#1A1A1A'],            // Puli
  58: ['sighthound', '#D2B48C', '#E8C9A0'],     // Pharaoh Hound
  59: ['sighthound', '#D2B48C', '#C4A265'],     // Cirneco dell'Etna
  60: ['toy', '#DAA520', '#F5F5F5'],            // Lowchen
  61: ['shepherd', '#2C2C2C', '#1A1A1A'],       // Mudi
  62: ['retriever', '#2C2C2C', '#F5F5F5'],      // Stabyhoun
  63: ['spitz', '#6B5B3A', '#8B7355'],          // Kai Ken
  64: ['hound', '#8B6C4A', '#F5F5F5'],          // Catalburun
  65: ['giant', '#C4A265', '#B8916E'],          // Chinook
  66: ['spitz', '#B5894E', '#F5DEB3'],          // Telomian
  67: ['hound', '#6E7B8B', '#B5894E'],          // Catahoula Leopard Dog
  68: ['spitz', '#CD853F', '#D2B48C'],          // Carolina Dog
  69: ['giant', '#2C2C2C', '#8B4513'],          // Tibetan Mastiff
  70: ['giant', '#C4A265', '#B8916E'],          // Fila Brasileiro
  71: ['spitz', '#DAA520', '#C4A265'],          // New Guinea Singing Dog
  72: ['shepherd', '#9E9E9E', '#B8916E'],       // Czechoslovakian Wolfdog
  73: ['shepherd', '#6B5B3A', '#8B7355'],       // Phu Quoc Ridgeback
  74: ['mop', '#DAA520', '#C4A265'],            // Sapsali
  75: ['giant', '#F5F5F5', '#2C2C2C'],          // Tornjak
};

// Excitement messages for each rarity when found
const FOUND_MESSAGES = {
  COMMON:    ['Nice Spot!', 'Good eye!', 'Spotted!'],
  UNCOMMON:  ['Good Find!', 'Well spotted!', 'Nice one!'],
  RARE:      ['Great Discovery!', 'Rare find!', 'Awesome spot!'],
  EPIC:      ['Incredible Find!', 'Epic discovery!', 'What a catch!'],
  LEGENDARY: ['LEGENDARY!', 'Unbelievable!', 'Once in a lifetime!'],
  MYTHIC:    ['MYTHIC DISCOVERY!', 'IMPOSSIBLE!', 'History made!'],
};
