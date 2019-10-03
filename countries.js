const countryData = [{
  name: 'China',
  population: '1,433,783,686',
  land_area: '9,388,211'
},
{
  name: 'India',
  population: '1,366,417,754',
  land_area: '2,973,190'
},
{
  name: 'United States',
  population: '329,064,917',
  land_area: '9,147,420'
},
{
  name: 'Indonesia',
  population: '270,625,568',
  land_area: '1,811,570'
},
{
  name: 'Pakistan',
  population: '216,565,318',
  land_area: '770,880'
},
{
  name: 'Brazil',
  population: '211,049,527',
  land_area: '8,358,140'
},
{
  name: 'Nigeria',
  population: '200,963,599',
  land_area: '910,770'
},
{
  name: 'Bangladesh',
  population: '163,046,161',
  land_area: '130,170'
},
{
  name: 'Russia',
  population: '145,872,256',
  land_area: '16,376,870'
},
{
  name: 'Mexico',
  population: '127,575,529',
  land_area: '1,943,950'
},
{
  name: 'Japan',
  population: '126,860,301',
  land_area: '364,555'
},
{
  name: 'Ethiopia',
  population: '112,078,730',
  land_area: '1,000,000'
},
{
  name: 'Philippines',
  population: '108,116,615',
  land_area: '298,170'
},
{
  name: 'Egypt',
  population: '100,388,073',
  land_area: '995,450'
},
{
  name: 'Vietnam',
  population: '96,462,106',
  land_area: '310,070'
},
{
  name: 'DR Congo',
  population: '86,790,567',
  land_area: '2,267,050'
},
{
  name: 'Germany',
  population: '83,517,045',
  land_area: '348,560'
},
{
  name: 'Turkey',
  population: '83,429,615',
  land_area: '769,630'
},
{
  name: 'Iran',
  population: '82,913,906',
  land_area: '1,628,550'
},
{
  name: 'Thailand',
  population: '69,625,582',
  land_area: '510,890'
},
{
  name: 'United Kingdom',
  population: '67,530,172',
  land_area: '241,930'
},
{
  name: 'France',
  population: '65,129,728',
  land_area: '547,557'
},
{ name: 'Italy', population: '60,550,075', land_area: '294,140' },
{
  name: 'South Africa',
  population: '58,558,270',
  land_area: '1,213,090'
},
{
  name: 'Tanzania',
  population: '58,005,463',
  land_area: '885,800'
},
{
  name: 'Myanmar',
  population: '54,045,420',
  land_area: '653,290'
},
{ name: 'Kenya', population: '52,573,973', land_area: '569,140' },
{
  name: 'South Korea',
  population: '51,225,308',
  land_area: '97,230'
},
{
  name: 'Colombia',
  population: '50,339,443',
  land_area: '1,109,500'
},
{ name: 'Spain', population: '46,736,776', land_area: '498,800' },
{
  name: 'Argentina',
  population: '44,780,677',
  land_area: '2,736,690'
},
{
  name: 'Uganda',
  population: '44,269,594',
  land_area: '199,810'
},
{
  name: 'Ukraine',
  population: '43,993,638',
  land_area: '579,320'
},
{
  name: 'Algeria',
  population: '43,053,054',
  land_area: '2,381,740'
},
{
  name: 'Sudan',
  population: '42,813,238',
  land_area: '1,765,048'
},
{ name: 'Iraq', population: '39,309,783', land_area: '434,320' },
{
  name: 'Afghanistan',
  population: '38,041,754',
  land_area: '652,860'
},
{
  name: 'Poland',
  population: '37,887,768',
  land_area: '306,230'
},
{
  name: 'Canada',
  population: '37,411,047',
  land_area: '9,093,510'
},
{
  name: 'Morocco',
  population: '36,471,769',
  land_area: '446,300'
},
{
  name: 'Saudi Arabia',
  population: '34,268,528',
  land_area: '2,149,690'
},
{
  name: 'Uzbekistan',
  population: '32,981,716',
  land_area: '425,400'
},
{
  name: 'Peru',
  population: '32,510,453',
  land_area: '1,280,000'
},
{
  name: 'Malaysia',
  population: '31,949,777',
  land_area: '328,550'
},
{
  name: 'Angola',
  population: '31,825,295',
  land_area: '1,246,700'
},
{ name: 'Ghana', population: '30,417,856', land_area: '227,540' },
{
  name: 'Mozambique',
  population: '30,366,036',
  land_area: '786,380'
},
{ name: 'Yemen', population: '29,161,922', land_area: '527,970' },
{ name: 'Nepal', population: '28,608,710', land_area: '143,350' },
{
  name: 'Venezuela',
  population: '28,515,829',
  land_area: '882,050'
},
{
  name: 'Madagascar',
  population: '26,969,307',
  land_area: '581,795'
},
{
  name: 'Cameroon',
  population: '25,876,380',
  land_area: '472,710'
},
{
  name: "Côte d'Ivoire",
  population: '25,716,544',
  land_area: '318,000'
},
{
  name: 'North Korea',
  population: '25,666,161',
  land_area: '120,410'
},
{
  name: 'Australia',
  population: '25,203,198',
  land_area: '7,682,300'
},
{
  name: 'Niger',
  population: '23,310,715',
  land_area: '1,266,700'
},
{
  name: 'Sri Lanka',
  population: '21,323,733',
  land_area: '62,710'
},
{
  name: 'Burkina Faso',
  population: '20,321,378',
  land_area: '273,600'
},
{
  name: 'Mali',
  population: '19,658,031',
  land_area: '1,220,190'
},
{
  name: 'Romania',
  population: '19,364,557',
  land_area: '230,170'
},
{ name: 'Chile', population: '18,952,038', land_area: '743,532' },
{ name: 'Malawi', population: '18,628,747', land_area: '94,280' },
{
  name: 'Kazakhstan',
  population: '18,551,427',
  land_area: '2,699,700'
},
{
  name: 'Zambia',
  population: '17,861,030',
  land_area: '743,390'
},
{
  name: 'Guatemala',
  population: '17,581,472',
  land_area: '107,160'
},
{
  name: 'Ecuador',
  population: '17,373,662',
  land_area: '248,360'
},
{
  name: 'Netherlands',
  population: '17,097,130',
  land_area: '33,720'
},
{ name: 'Syria', population: '17,070,135', land_area: '183,630' },
{
  name: 'Cambodia',
  population: '16,486,542',
  land_area: '176,520'
},
{
  name: 'Senegal',
  population: '16,296,364',
  land_area: '192,530'
},
{
  name: 'Chad',
  population: '15,946,876',
  land_area: '1,259,200'
},
{
  name: 'Somalia',
  population: '15,442,905',
  land_area: '627,340'
},
{
  name: 'Zimbabwe',
  population: '14,645,468',
  land_area: '386,850'
},
{
  name: 'Guinea',
  population: '12,771,246',
  land_area: '245,720'
},
{ name: 'Rwanda', population: '12,626,950', land_area: '24,670' },
{ name: 'Benin', population: '11,801,151', land_area: '112,760' },
{
  name: 'Tunisia',
  population: '11,694,719',
  land_area: '155,360'
},
{
  name: 'Belgium',
  population: '11,539,328',
  land_area: '30,280'
},
{
  name: 'Burundi',
  population: '11,530,580',
  land_area: '25,680'
},
{
  name: 'Bolivia',
  population: '11,513,100',
  land_area: '1,083,300'
},
{ name: 'Cuba', population: '11,333,483', land_area: '106,440' },
{ name: 'Haiti', population: '11,263,077', land_area: '27,560' },
{
  name: 'South Sudan',
  population: '11,062,113',
  land_area: '610,952'
},
{
  name: 'Dominican Republic',
  population: '10,738,958',
  land_area: '48,320'
},
{
  name: 'Czech Republic (Czechia)',
  population: '10,689,209',
  land_area: '77,240'
},
{
  name: 'Greece',
  population: '10,473,455',
  land_area: '128,900'
},
{
  name: 'Portugal',
  population: '10,226,187',
  land_area: '91,590'
},
{ name: 'Jordan', population: '10,101,694', land_area: '88,780' },
{
  name: 'Azerbaijan',
  population: '10,047,718',
  land_area: '82,658'
},
{
  name: 'Sweden',
  population: '10,036,379',
  land_area: '410,340'
},
{
  name: 'United Arab Emirates',
  population: '9,770,529',
  land_area: '83,600'
},
{
  name: 'Honduras',
  population: '9,746,117',
  land_area: '111,890'
},
{ name: 'Hungary', population: '9,684,679', land_area: '90,530' },
{
  name: 'Belarus',
  population: '9,452,411',
  land_area: '202,910'
},
{
  name: 'Tajikistan',
  population: '9,321,018',
  land_area: '139,960'
},
{ name: 'Austria', population: '8,955,102', land_area: '82,409' },
{
  name: 'Papua New Guinea',
  population: '8,776,109',
  land_area: '452,860'
},
{ name: 'Serbia', population: '8,772,235', land_area: '87,460' },
{
  name: 'Switzerland',
  population: '8,591,365',
  land_area: '39,516'
},
{ name: 'Israel', population: '8,519,377', land_area: '21,640' },
  { name: 'Togo', population: '8,082,366', land_area: '54,390' },
  {
    name: 'Sierra Leone',
    population: '7,813,215',
    land_area: '72,180'
  },
  { name: 'Laos', population: '7,169,455', land_area: '230,800' },
  {
    name: 'Paraguay',
    population: '7,044,636',
    land_area: '397,300'
  },
  {
    name: 'Bulgaria',
    population: '7,000,119',
    land_area: '108,560'
  },
  { name: 'Lebanon', population: '6,855,713', land_area: '10,230' },
  {
    name: 'Libya',
    population: '6,777,452',
    land_area: '1,759,540'
  },
  {
    name: 'Nicaragua',
    population: '6,545,502',
    land_area: '120,340'
  },
  {
    name: 'El Salvador',
    population: '6,453,553',
    land_area: '20,720'
  },
  {
    name: 'Kyrgyzstan',
    population: '6,415,850',
    land_area: '191,800'
  },
  {
    name: 'Turkmenistan',
    population: '5,942,089',
    land_area: '469,930'
  },
  { name: 'Singapore', population: '5,804,337', land_area: '700' },
  { name: 'Denmark', population: '5,771,876', land_area: '42,430' },
  {
    name: 'Finland',
    population: '5,532,156',
    land_area: '303,890'
  },
  {
    name: 'Slovakia',
    population: '5,457,013',
    land_area: '48,088'
  },
  { name: 'Congo', population: '5,380,508', land_area: '341,500' },
  { name: 'Norway', population: '5,378,857', land_area: '365,268' },
  {
    name: 'Costa Rica',
    population: '5,047,561',
    land_area: '51,060'
  },
  {
    name: 'State of Palestine',
    population: '4,981,420',
    land_area: '6,020'
  },
  { name: 'Oman', population: '4,974,986', land_area: '309,500' },
  { name: 'Liberia', population: '4,937,374', land_area: '96,320' },
  { name: 'Ireland', population: '4,882,495', land_area: '68,890' },
  {
    name: 'New Zealand',
    population: '4,783,063',
    land_area: '263,310'
  },
  {
    name: 'Central African Republic',
    population: '4,745,185',
    land_area: '622,980'
  },
  {
    name: 'Mauritania',
    population: '4,525,696',
    land_area: '1,030,700'
  },
  { name: 'Panama', population: '4,246,439', land_area: '74,340' },
  { name: 'Kuwait', population: '4,207,083', land_area: '17,820' },
  { name: 'Croatia', population: '4,130,304', land_area: '55,960' },
  { name: 'Moldova', population: '4,043,263', land_area: '32,850' },
  { name: 'Georgia', population: '3,996,765', land_area: '69,490' },
  {
    name: 'Eritrea',
    population: '3,497,117',
    land_area: '101,000'
  },
  {
    name: 'Uruguay',
    population: '3,461,734',
    land_area: '175,020'
  },
  {
    name: 'Bosnia and Herzegovina',
    population: '3,301,000',
    land_area: '51,000'
  },
  {
    name: 'Mongolia',
    population: '3,225,167',
    land_area: '1,553,560'
  },
  { name: 'Armenia', population: '2,957,731', land_area: '28,470' },
  { name: 'Jamaica', population: '2,948,279', land_area: '10,830' },
  { name: 'Albania', population: '2,880,917', land_area: '27,400' },
  { name: 'Qatar', population: '2,832,067', land_area: '11,610' },
  {
    name: 'Lithuania',
    population: '2,759,627',
    land_area: '62,674'
  },
  {
    name: 'Namibia',
    population: '2,494,530',
    land_area: '823,290'
  },
  { name: 'Gambia', population: '2,347,706', land_area: '10,120' },
  {
    name: 'Botswana',
    population: '2,303,697',
    land_area: '566,730'
  },
  { name: 'Gabon', population: '2,172,579', land_area: '257,670' },
  { name: 'Lesotho', population: '2,125,268', land_area: '30,360' },
  {
    name: 'North Macedonia',
    population: '2,083,459',
    land_area: '25,220'
  },
  {
    name: 'Slovenia',
    population: '2,078,654',
    land_area: '20,140'
  },
  {
    name: 'Guinea-Bissau',
    population: '1,920,922',
    land_area: '28,120'
  },
  { name: 'Latvia', population: '1,906,743', land_area: '62,200' },
  { name: 'Bahrain', population: '1,641,172', land_area: '760' },
  {
    name: 'Trinidad and Tobago',
    population: '1,394,973',
    land_area: '5,130'
  },
  {
    name: 'Equatorial Guinea',
    population: '1,355,986',
    land_area: '28,050'
  },
  { name: 'Estonia', population: '1,325,648', land_area: '42,390' },
  {
    name: 'Timor-Leste',
    population: '1,293,119',
    land_area: '14,870'
  },
  {
    name: 'Mauritius',
    population: '1,269,668',
    land_area: '2,030'
  },
  { name: 'Cyprus', population: '1,198,575', land_area: '9,240' },
  {
    name: 'Eswatini',
    population: '1,148,130',
    land_area: '17,200'
  },
  { name: 'Djibouti', population: '973,560', land_area: '23,180' },
  { name: 'Fiji', population: '889,953', land_area: '18,270' },
  { name: 'Comoros', population: '850,886', land_area: '1,861' },
  { name: 'Guyana', population: '782,766', land_area: '196,850' },
  { name: 'Bhutan', population: '763,092', land_area: '38,117' },
  {
    name: 'Solomon Islands',
    population: '669,823',
    land_area: '27,990'
  },
  {
    name: 'Montenegro',
    population: '627,987',
    land_area: '13,450'
  },
  { name: 'Luxembourg', population: '615,729', land_area: '2,590' },
  { name: 'Suriname', population: '581,372', land_area: '156,000' },
  { name: 'Cabo Verde', population: '549,935', land_area: '4,030' },
  { name: 'Micronesia', population: '543,486', land_area: '700' },
  { name: 'Maldives', population: '530,953', land_area: '300' },
  { name: 'Malta', population: '440,372', land_area: '320' },
  { name: 'Brunei', population: '433,285', land_area: '5,270' },
  { name: 'Belize', population: '390,353', land_area: '22,810' },
  { name: 'Bahamas', population: '389,482', land_area: '10,010' },
  { name: 'Iceland', population: '339,031', land_area: '100,250' },
  { name: 'Vanuatu', population: '299,882', land_area: '12,190' },
  { name: 'Barbados', population: '287,025', land_area: '430' },
  {
    name: 'Sao Tome & Principe',
    population: '215,056',
    land_area: '960'
  },
  { name: 'Samoa', population: '197,097', land_area: '2,830' },
  { name: 'Saint Lucia', population: '182,790', land_area: '610' },
  { name: 'Kiribati', population: '117,606', land_area: '810' },
  { name: 'Grenada', population: '112,003', land_area: '340' },
  {
    name: 'St. Vincent & Grenadines',
    population: '110,589',
    land_area: '390'
  },
  { name: 'Tonga', population: '104,494', land_area: '720' },
  { name: 'Seychelles', population: '97,739', land_area: '460' },
  {
    name: 'Antigua and Barbuda',
    population: '97,118',
    land_area: '440'
  },
  { name: 'Andorra', population: '77,142', land_area: '470' },
  { name: 'Dominica', population: '71,808', land_area: '750' },
  {
    name: 'Marshall Islands',
    population: '58,791',
    land_area: '180'
  },
  {
    name: 'Saint Kitts & Nevis',
    population: '52,823',
    land_area: '260'
  },
  { name: 'Monaco', population: '38,964', land_area: '1' },
  { name: 'Liechtenstein', population: '38,019', land_area: '160' },
  { name: 'San Marino', population: '33,860', land_area: '60' },
  { name: 'Palau', population: '18,008', land_area: '460' },
  { name: 'Tuvalu', population: '11,646', land_area: '30' },
  { name: 'Nauru', population: '10,756', land_area: '20' },
  { name: 'Holy See', population: '799', land_area: '0' }
]

module.exports = countryData;