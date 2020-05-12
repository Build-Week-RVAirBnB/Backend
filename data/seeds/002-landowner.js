
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('landowner').del()
    .then(function () {
      // Inserts seed entries
      return knex('landowner').insert(
        [
          {
            username: 'bchesher0',
            email: 'cbalme0@hugedomains.com',
            password: 'ZmOoUVl',
            contact: '862-854-6705'
          }, {
            username: 'kjewis1',
            email: 'landreazzi1@blogs.com',
            password: 'SnwKqUCwrc',
            contact: '477-555-4447'
          }, {
            username: 'rkarpeev2',
            email: 'dellgood2@xrea.com',
            password: 'aJy4vo6L5X',
            contact: '142-218-7247'
          }, {
            username: 'cspikins3',
            email: 'mbalsom3@addtoany.com',
            password: '4jUJIQWuTt2',
            contact: '583-482-7786'
          }, {
            username: 'btee4',
            email: 'tram4@walmart.com',
            password: 'kzTVNI1',
            contact: '792-680-1534'
          }, {
            username: 'bnerger5',
            email: 'aplank5@arizona.edu',
            password: '1bWpSeTp9',
            contact: '541-969-7746'
          }, {
            username: 'rwoloschinski6',
            email: 'tchatburn6@nationalgeographic.com',
            password: 'BEYwfJwR',
            contact: '335-927-8359'
          }, {
            username: 'anorbury7',
            email: 'kroyle7@hp.com',
            password: 'GD5anVDpBI',
            contact: '356-206-9505'
          }, {
            username: 'svalsler8',
            email: 'jlanghorne8@moonfruit.com',
            password: 'vg448-501-9014',
            contact: '803-980-3313'
          }, {
            username: 'ejohnsson9',
            email: 'tpendrick9@pcworld.com',
            password: 'szfaStut',
            contact: '803-980-3313'
          }, {
            username: 'ddillimorea',
            email: 'aagerskowa@nifty.com',
            password: '0oSwYell9v',
            contact: '227-312-7124'
          }, {
            username: 'bremmersb',
            email: 'laxtellb@latimes.com',
            password: 'DVcoWeuknhfn',
            contact: '696-542-7113'
          }, {
            username: 'ccrushc',
            email: 'csandaverc@cpanel.net',
            password: 'a0xDGA4ThK4',
            contact: '166-458-7950'
          }, {
            username: 'propkesd',
            email: 'egravestoned@dailymotion.com',
            password: '5WgoEZQkKC',
            contact: '998-860-0617'
          }, {
            username: 'lkopelmane',
            email: 'klewknore@psu.edu',
            password: '31ikqy',
            contact: '513-957-8176'
          }, {
            username: 'cchallenorf',
            email: 'cbowlasf@bbb.org',
            password: 'FLhzHm7iI',
            contact: '390-301-8789'
          }, {
            username: 'jcurleyg',
            email: 'dgorewayg@cisco.com',
            password: 'uJdHemKeWV7',
            contact: '609-136-5326'
          }, {
            username: 'oovetth',
            email: 'mjerzycowskih@people.com.cn',
            password: 'NVLiA7V58z',
            contact: '136-291-8462'
          }, {
            username: 'dricardoi',
            email: 'ebeamsoni@examiner.com',
            password: 'BAaJ0eD10b9h',
            contact: '121-402-0674'
          }, {
            username: 'gwarnej',
            email: 'jmcbrierj@craigslist.org',
            password: 'zJ00pLqMpJM2',
            contact: '373-675-2772'
          }
        ]
      )
    }
    )
}
