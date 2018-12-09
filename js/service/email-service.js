import storageService from './storage-service.js'

import utilService from './util-service.js'


const KEY = 'emailAppKey';

function getEmailsList(filter = null) {

    return storageService.load(KEY)
        .then(emails => {
            if (!emails || !emails.length) {
                emails = randomEmailsList();
                storageService.store(KEY, emails);
            }
            // console.log('emails: ', emails);
            if (filter === null || filter.by === null) return emails;
            else  
                if(typeof(filter.by) === "boolean"){
                    return emails.filter(email =>
                        email.isRead === filter.by && filter.type === 'read' ||
                        email.isStar === filter.by && filter.type === 'star')
                } else{
                    return emails.filter(email =>
                    email.subject.toUpperCase().includes(filter.by.toUpperCase())||
                    email.from.toUpperCase().includes(filter.by.toUpperCase())||
                    email.body.toUpperCase().includes(filter.by.toUpperCase())
                    )
                }
        })
}


function randomEmailsList(){
    var list = [
        {"from": "Nasim Marshall", sentAt: 1473329505, "body": "Sed auctor odio a purus. Duis elementum, dui quis accumsan convallis, ante lectus convallis est,", "subject": "vitae odio sagittis semper. Nam"},
        {"from": "Colorado Morris", "sentAt": 1524105371, "body": "ac tellus. Suspendisse sed dolor. Fusce mi lorem, vehicula et, rutrum eu, ultrices sit amet, risus. Donec nibh enim, gravida sit amet, dapibus id, blandit at, nisi.", "subject": "aliquam adipiscing lacus. Ut nec"},
        {"from": "Carl Henderson", "sentAt": 1528037460, "body": "Quisque fringilla euismod enim. Etiam gravida molestie arcu. Sed eu nibh vulputate mauris sagittis placerat. Cras dictum ultricies ligula. Nullam enim. Sed", "subject": "id risus quis diam luctus"},
        {"from": "Yasir Mitchell", "sentAt": "1451591846", "body": "vel quam dignissim pharetra. Nam ac nulla. In tincidunt congue turpis. In condimentum. Donec at", "subject": "at risus. Nunc ac sem"},
        {"from": "Kadeem Farmer", "sentAt": "1461120291", "body": "enim, gravida sit amet, dapibus id, blandit at, nisi. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin vel nisl. Quisque fringilla euismod enim.", "subject": "Nulla interdum. Curabitur dictum. Phasellus"},
        {"from": "Henry Koch", "sentAt": "1523070960", "body": "lorem, vehicula et, rutrum eu, ultrices sit amet, risus. Donec nibh enim, gravida sit amet, dapibus id, blandit", "subject": "risus. Quisque libero lacus, varius"},
        {"from": "Kelly Thornton", "sentAt": "1471337169", "body": "turpis egestas. Fusce aliquet magna a neque. Nullam ut nisi a odio semper cursus. Integer mollis. Integer tincidunt aliquam arcu. Aliquam ultrices iaculis", "subject": "rutrum, justo. Praesent luctus. Curabitur"},
        {"from": "Noah Pacheco", "sentAt": "1538218407", "body": "nunc. Quisque ornare tortor at risus. Nunc ac sem ut dolor dapibus gravida. Aliquam tincidunt, nunc ac mattis ornare, lectus ante dictum mi, ac mattis velit justo nec ante. Maecenas", "subject": "diam. Proin dolor. Nulla semper"},
        {"from": "Geoffrey Moody", "sentAt": "1509316829", "body": "diam eu dolor egestas rhoncus. Proin nisl sem, consequat nec, mollis vitae, posuere at, velit. Cras lorem lorem, luctus ut, pellentesque eget, dictum placerat, augue. Sed molestie. Sed id", "subject": "sagittis placerat. Cras dictum ultricies"},
        {"from": "Phillip Anderson", "sentAt": "1464318069", "body": "lectus justo eu arcu. Morbi sit amet massa. Quisque porttitor eros nec tellus. Nunc lectus pede,", "subject": "nec urna et arcu imperdiet"},
        {"from": "Lawrence Doyle", "sentAt": "1458608504", "body": "est, mollis non, cursus non, egestas a, dui. Cras pellentesque. Sed dictum. Proin eget odio. Aliquam vulputate ullamcorper magna. Sed eu eros. Nam consequat dolor", "subject": "In tincidunt congue turpis. In"},
        {"from": "Martin Holman", "sentAt": "1483837373", "body": "sed sem egestas blandit. Nam nulla magna, malesuada vel, convallis in, cursus et, eros. Proin ultrices. Duis volutpat nunc", "subject": "lacus. Aliquam rutrum lorem ac"},
        {"from": "Eaton Blanchard", "sentAt": "1498366796", "body": "dis parturient montes, nascetur ridiculus mus. Donec dignissim magna a tortor. Nunc commodo auctor velit. Aliquam nisl. Nulla eu neque pellentesque massa", "subject": "vel turpis. Aliquam adipiscing lobortis"},
        {"from": "Palmer Boone", "sentAt": "1517934380", "body": "sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eget magna. Suspendisse tristique neque venenatis", "subject": "enim. Suspendisse aliquet, sem ut"},
        {"from": "Driscoll French", "sentAt": "1513708441", "body": "Donec non justo. Proin non massa non ante bibendum ullamcorper. Duis cursus, diam at pretium aliquet, metus urna convallis erat, eget tincidunt dui augue eu tellus. Phasellus elit pede, malesuada", "subject": "ac libero nec ligula consectetuer"},
        {"from": "Elton Chambers", "sentAt": "1537441747", "body": "lacus, varius et, euismod et, commodo at, libero. Morbi accumsan laoreet ipsum. Curabitur consequat, lectus sit amet luctus vulputate,", "subject": "interdum. Sed auctor odio a"},
        {"from": "Lance Hinton", "sentAt": "1497234787", "body": "vitae, erat. Vivamus nisi. Mauris nulla. Integer urna. Vivamus molestie dapibus ligula. Aliquam erat volutpat. Nulla dignissim. Maecenas ornare", "subject": "eget odio. Aliquam vulputate ullamcorper"},
        {"from": "Kennan Carroll", "sentAt": "1478048987", "body": "sapien, cursus in, hendrerit consectetuer, cursus et, magna. Praesent interdum ligula eu enim. Etiam imperdiet dictum magna. Ut tincidunt", "subject": "tristique aliquet. Phasellus fermentum convallis"},
        {"from": "Allen Slater", "sentAt": "1472948292", "body": "mauris ipsum porta elit, a feugiat tellus lorem eu metus. In lorem. Donec elementum, lorem ut aliquam iaculis, lacus pede", "subject": "ullamcorper. Duis at lacus. Quisque"},
        {"from": "Keane Wong", "sentAt": "1536405618", "body": "ante lectus convallis est, vitae sodales nisi magna sed dui. Fusce aliquam, enim nec tempus scelerisque, lorem ipsum sodales purus, in molestie tortor nibh sit amet orci.", "subject": "lorem semper auctor. Mauris vel"},
        {"from": "Abdul Cox", "sentAt": "1526252489", "body": "Duis a mi fringilla mi lacinia mattis. Integer eu lacus. Quisque imperdiet, erat nonummy ultricies ornare, elit elit fermentum risus, at fringilla purus mauris a nunc. In at pede. Cras", "subject": "mi. Duis risus odio, auctor"},
        {"from": "Eric Shaffer", "sentAt": "1484408116", "body": "Nullam enim. Sed nulla ante, iaculis nec, eleifend non, dapibus rutrum, justo. Praesent luctus. Curabitur egestas nunc sed libero.", "subject": "nisi sem semper erat, in"},
        {"from": "Ray Pugh", "sentAt": "1455748774", "body": "metus. In nec orci. Donec nibh. Quisque nonummy ipsum non arcu. Vivamus sit amet risus. Donec egestas. Aliquam nec enim. Nunc ut erat. Sed nunc est, mollis non, cursus non,", "subject": "non, lacinia at, iaculis quis,"},
        {"from": "Emerson Clayton", "sentAt": "1451541523", "body": "Cras dictum ultricies ligula. Nullam enim. Sed nulla ante, iaculis nec, eleifend non, dapibus rutrum, justo. Praesent luctus. Curabitur egestas nunc sed libero. Proin sed turpis", "subject": "dictum sapien. Aenean massa. Integer"},
        {"from": "Hunter Dominguez", "sentAt": "1507986258", "body": "Morbi sit amet massa. Quisque porttitor eros nec tellus. Nunc lectus pede, ultrices a, auctor non, feugiat nec, diam. Duis mi enim, condimentum eget, volutpat", "subject": "ac orci. Ut semper pretium"},
        {"from": "Jerome Stone", "sentAt": "1483235298", "body": "risus varius orci, in consequat enim diam vel arcu. Curabitur ut odio vel est tempor bibendum. Donec felis orci, adipiscing", "subject": "sem mollis dui, in sodales"},
        {"from": "Charles Pollard", "sentAt": "1450398509", "body": "Aliquam adipiscing lobortis risus. In mi pede, nonummy ut, molestie in, tempus eu, ligula. Aenean euismod mauris eu elit. Nulla facilisi. Sed neque. Sed", "subject": "ipsum ac mi eleifend egestas."},
        {"from": "James Little", "sentAt": "1452872461", "body": "tortor nibh sit amet orci. Ut sagittis lobortis mauris. Suspendisse aliquet molestie tellus. Aenean egestas hendrerit neque. In ornare sagittis felis. Donec tempor,", "subject": "fermentum convallis ligula. Donec luctus"},
        {"from": "Quamar Mcpherson", "sentAt": "1465845728", "body": "ornare, facilisis eget, ipsum. Donec sollicitudin adipiscing ligula. Aenean gravida nunc sed pede. Cum sociis natoque penatibus", "subject": "tempus mauris erat eget ipsum."},
        {"from": "Noah Howe", "sentAt": "1464230184", "body": "commodo ipsum. Suspendisse non leo. Vivamus nibh dolor, nonummy ac, feugiat non, lobortis quis, pede. Suspendisse dui. Fusce diam nunc, ullamcorper eu, euismod ac, fermentum vel, mauris. Integer sem elit,", "subject": "luctus vulputate, nisi sem semper"},
        {"from": "Alexander Kerr", "sentAt": "1494748609", "body": "euismod in, dolor. Fusce feugiat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam auctor, velit eget laoreet posuere, enim nisl elementum purus, accumsan", "subject": "sit amet nulla. Donec non"},
        {"from": "Addison Dennis", "sentAt": "1454988325", "body": "ultrices. Vivamus rhoncus. Donec est. Nunc ullamcorper, velit in aliquet lobortis, nisi nibh lacinia orci, consectetuer euismod est arcu", "subject": "at auctor ullamcorper, nisl arcu"},
        {"from": "Arden Cherry", "sentAt": "1487814050", "body": "nostra, per inceptos hymenaeos. Mauris ut quam vel sapien imperdiet ornare. In faucibus. Morbi vehicula. Pellentesque tincidunt tempus risus. Donec egestas. Duis ac arcu.", "subject": "non, bibendum sed, est. Nunc"},
        {"from": "Raymond Mullen", "sentAt": "1539788939", "body": "Cras eu tellus eu augue porttitor interdum. Sed auctor odio a purus. Duis elementum, dui quis accumsan convallis, ante lectus convallis est, vitae", "subject": "ipsum primis in faucibus orci"},
        {"from": "Demetrius Rivers", "sentAt": "1526272661", "body": "et pede. Nunc sed orci lobortis augue scelerisque mollis. Phasellus libero mauris, aliquam eu, accumsan sed, facilisis vitae, orci. Phasellus dapibus quam quis", "subject": "sapien. Cras dolor dolor, tempus"},
        {"from": "Philip Sanford", "sentAt": "1484175673", "body": "sapien. Aenean massa. Integer vitae nibh. Donec est mauris, rhoncus id, mollis nec, cursus a, enim. Suspendisse aliquet, sem ut cursus luctus, ipsum leo", "subject": "purus. Maecenas libero est, congue"},
        {"from": "Uriah Yang", "sentAt": "1536509660", "body": "dui lectus rutrum urna, nec luctus felis purus ac tellus. Suspendisse sed dolor. Fusce mi lorem, vehicula et, rutrum eu, ultrices sit amet, risus. Donec nibh", "subject": "et, euismod et, commodo at,"},
        {"from": "Len Steele", "sentAt": "1510390578", "body": "scelerisque, lorem ipsum sodales purus, in molestie tortor nibh sit amet orci. Ut sagittis lobortis mauris. Suspendisse aliquet molestie tellus. Aenean egestas hendrerit neque.", "subject": "turpis egestas. Fusce aliquet magna"},
        {"from": "Bruce Finley", "sentAt": "1496268608", "body": "Sed nec metus facilisis lorem tristique aliquet. Phasellus fermentum convallis ligula. Donec luctus aliquet odio. Etiam ligula tortor, dictum eu,", "subject": "Nulla eu neque pellentesque massa"},
        {"from": "Ishmael Maddox", "sentAt": "1523833282", "body": "neque et nunc. Quisque ornare tortor at risus. Nunc ac sem ut dolor dapibus gravida.", "subject": "neque. In ornare sagittis felis."},
        {"from": "Thaddeus Matthews", "sentAt": "1512089149", "body": "est. Nunc ullamcorper, velit in aliquet lobortis, nisi nibh lacinia orci, consectetuer euismod est arcu ac orci. Ut semper pretium neque. Morbi", "subject": "Donec fringilla. Donec feugiat metus"},
        {"from": "Vance Grimes", "sentAt": "1505770638", "body": "lacus. Ut nec urna et arcu imperdiet ullamcorper. Duis at lacus. Quisque purus sapien, gravida non, sollicitudin a,", "subject": "sit amet ultricies sem magna"},
        {"from": "Aaron Todd", "sentAt": "1457997578", "body": "eu elit. Nulla facilisi. Sed neque. Sed eget lacus. Mauris non dui nec urna suscipit", "subject": "enim diam vel arcu. Curabitur"},
        {"from": "Kermit Mack", "sentAt": "1493164122", "body": "ac nulla. In tincidunt congue turpis. In condimentum. Donec at arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere", "subject": "egestas. Aliquam fringilla cursus purus."},
        {"from": "Demetrius Jacobs", "sentAt": "1533988740", "body": "neque. In ornare sagittis felis. Donec tempor, est ac mattis semper, dui lectus rutrum urna, nec luctus felis purus ac tellus.", "subject": "Curabitur dictum. Phasellus in felis."},
        {"from": "Leonard Butler", "sentAt": "1474105085", "body": "Suspendisse ac metus vitae velit egestas lacinia. Sed congue, elit sed consequat auctor, nunc nulla vulputate dui, nec tempus mauris erat eget ipsum. Suspendisse sagittis. Nullam vitae diam.", "subject": "malesuada fames ac turpis egestas."},
        {"from": "Charles Kinney", "sentAt": "1529837665", "body": "Phasellus fermentum convallis ligula. Donec luctus aliquet odio. Etiam ligula tortor, dictum eu, placerat eget, venenatis a, magna. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam laoreet, libero et", "subject": "nec enim. Nunc ut erat."},
        {"from": "Lyle Curry", "sentAt": "1515690766", "body": "et, euismod et, commodo at, libero. Morbi accumsan laoreet ipsum. Curabitur consequat, lectus sit amet luctus vulputate, nisi sem semper erat, in consectetuer ipsum nunc id enim.", "subject": "vulputate velit eu sem. Pellentesque"},
        {"from": "Victor Stein", "sentAt": "1487333114", "body": "scelerisque, lorem ipsum sodales purus, in molestie tortor nibh sit amet orci. Ut sagittis lobortis mauris. Suspendisse aliquet molestie tellus. Aenean egestas hendrerit neque. In ornare sagittis felis.", "subject": "dis parturient montes, nascetur ridiculus"},
        {"from": "Igor Sargent", "sentAt": "1527869129", "body": "justo. Praesent luctus. Curabitur egestas nunc sed libero. Proin sed turpis nec mauris blandit mattis. Cras eget nisi", "subject": "orci lobortis augue scelerisque mollis."},
        {"from": "Cole Cline", "sentAt": "1485699617", "body": "Ut sagittis lobortis mauris. Suspendisse aliquet molestie tellus. Aenean egestas hendrerit neque. In ornare sagittis felis. Donec tempor, est ac mattis semper, dui", "subject": "tristique neque venenatis lacus. Etiam"},
        {"from": "Dean Neal", "sentAt": "1453422459", "body": "Vivamus molestie dapibus ligula. Aliquam erat volutpat. Nulla dignissim. Maecenas ornare egestas ligula. Nullam feugiat placerat velit.", "subject": "Vestibulum ante ipsum primis in"},
        {"from": "Magee Barrett", "sentAt": "1501003965", "body": "vulputate, lacus. Cras interdum. Nunc sollicitudin commodo ipsum. Suspendisse non leo. Vivamus nibh dolor, nonummy ac, feugiat non, lobortis quis, pede. Suspendisse dui.", "subject": "sem ut cursus luctus, ipsum"},
        {"from": "Allen Huff", "sentAt": "1448228652", "body": "nulla magna, malesuada vel, convallis in, cursus et, eros. Proin ultrices. Duis volutpat nunc sit amet metus. Aliquam erat volutpat. Nulla facilisis. Suspendisse commodo tincidunt nibh. Phasellus nulla. Integer", "subject": "Suspendisse sagittis. Nullam vitae diam."},
        {"from": "Chaim Matthews", "sentAt": "1516521907", "body": "vehicula. Pellentesque tincidunt tempus risus. Donec egestas. Duis ac arcu. Nunc mauris. Morbi non sapien molestie orci tincidunt adipiscing. Mauris molestie", "subject": "adipiscing lobortis risus. In mi"},
        {"from": "Jonah Tyler", "sentAt": "1509570803", "body": "ultricies sem magna nec quam. Curabitur vel lectus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec dignissim magna", "subject": "eu odio tristique pharetra. Quisque"},
        {"from": "Ulysses Perkins", "sentAt": "1480583932", "body": "Praesent eu dui. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean", "subject": "Mauris blandit enim consequat purus."},
        {"from": "Daquan Hull", "sentAt": "1465448554", "body": "Donec tempus, lorem fringilla ornare placerat, orci lacus vestibulum lorem, sit amet ultricies sem magna nec quam. Curabitur vel lectus. Cum sociis natoque penatibus et magnis dis parturient montes,", "subject": "Aenean egestas hendrerit neque. In"},
        {"from": "Jasper Warren", "sentAt": "1462262928", "body": "libero. Morbi accumsan laoreet ipsum. Curabitur consequat, lectus sit amet luctus vulputate, nisi sem semper erat, in consectetuer ipsum nunc id enim. Curabitur massa. Vestibulum accumsan", "subject": "lacus. Mauris non dui nec"},
        {"from": "Xanthus Colon", "sentAt": "1512517243", "body": "magna, malesuada vel, convallis in, cursus et, eros. Proin ultrices. Duis volutpat nunc sit amet metus. Aliquam erat", "subject": "lobortis quis, pede. Suspendisse dui."},
        {"from": "Oleg Chavez", "sentAt": "1488386431", "body": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin vel nisl. Quisque fringilla euismod enim. Etiam", "subject": "fermentum arcu. Vestibulum ante ipsum"},
        {"from": "Omar Johnston", "sentAt": "1461818109", "body": "ipsum dolor sit amet, consectetuer adipiscing elit. Etiam laoreet, libero et tristique pellentesque, tellus sem mollis dui, in sodales elit erat vitae risus. Duis a", "subject": "arcu ac orci. Ut semper"},
        {"from": "Joshua Brennan", "sentAt": "1458927608", "body": "fames ac turpis egestas. Fusce aliquet magna a neque. Nullam ut nisi a odio semper cursus. Integer mollis. Integer tincidunt aliquam", "subject": "eu, placerat eget, venenatis a,"},
        {"from": "Adrian Pitts", "sentAt": "1479987567", "body": "Nullam enim. Sed nulla ante, iaculis nec, eleifend non, dapibus rutrum, justo. Praesent luctus. Curabitur egestas nunc sed libero. Proin sed turpis nec mauris blandit mattis. Cras eget nisi dictum", "subject": "vitae nibh. Donec est mauris,"},
        {"from": "Barry Stevenson", "sentAt": "1504148817", "body": "laoreet ipsum. Curabitur consequat, lectus sit amet luctus vulputate, nisi sem semper erat, in consectetuer ipsum nunc id enim. Curabitur massa. Vestibulum accumsan neque et nunc.", "subject": "arcu iaculis enim, sit amet"},
        {"from": "Ignatius Horton", "sentAt": "1489041213", "body": "tellus faucibus leo, in lobortis tellus justo sit amet nulla. Donec non justo. Proin non massa non ante", "subject": "turpis. Nulla aliquet. Proin velit."},
        {"from": "Samson Moss", "sentAt": "1523438966", "body": "ut odio vel est tempor bibendum. Donec felis orci, adipiscing non, luctus sit amet, faucibus ut, nulla. Cras", "subject": "amet risus. Donec egestas. Aliquam"},
        {"from": "Caldwell Mendoza", "sentAt": "1526290745", "body": "non, hendrerit id, ante. Nunc mauris sapien, cursus in, hendrerit consectetuer, cursus et, magna. Praesent interdum ligula eu enim. Etiam imperdiet dictum", "subject": "sodales. Mauris blandit enim consequat"},
        {"from": "Lyle Steele", "sentAt": "1491471694", "body": "ipsum porta elit, a feugiat tellus lorem eu metus. In lorem. Donec elementum, lorem ut aliquam iaculis, lacus pede sagittis augue,", "subject": "cursus. Nunc mauris elit, dictum"},
        {"from": "Aquila Leon", "sentAt": "1456456005", "body": "Donec tempor, est ac mattis semper, dui lectus rutrum urna, nec luctus felis purus ac tellus. Suspendisse sed dolor. Fusce mi lorem, vehicula", "subject": "scelerisque neque. Nullam nisl. Maecenas"},
        {"from": "Dieter George", "sentAt": "1491668505", "body": "turpis vitae purus gravida sagittis. Duis gravida. Praesent eu nulla at sem molestie sodales. Mauris", "subject": "dui. Fusce diam nunc, ullamcorper"},
        {"from": "Craig Gay", "sentAt": "1500584722", "body": "tincidunt nibh. Phasellus nulla. Integer vulputate, risus a ultricies adipiscing, enim mi tempor lorem, eget mollis lectus", "subject": "accumsan convallis, ante lectus convallis"},
        {"from": "Wing Lawrence", "sentAt": "1508764083", "body": "erat volutpat. Nulla facilisis. Suspendisse commodo tincidunt nibh. Phasellus nulla. Integer vulputate, risus a ultricies adipiscing, enim mi tempor lorem, eget mollis lectus pede et risus. Quisque libero lacus, varius", "subject": "Proin velit. Sed malesuada augue"},
        {"from": "Andrew Juarez", "sentAt": "1526403706", "body": "ac turpis egestas. Fusce aliquet magna a neque. Nullam ut nisi a odio semper cursus. Integer mollis. Integer tincidunt aliquam arcu. Aliquam ultrices iaculis odio. Nam interdum", "subject": "Aliquam rutrum lorem ac risus."},
        {"from": "Ray Petty", "sentAt": "1449129568", "body": "Nam nulla magna, malesuada vel, convallis in, cursus et, eros. Proin ultrices. Duis volutpat nunc sit amet metus. Aliquam erat volutpat. Nulla facilisis. Suspendisse commodo", "subject": "et pede. Nunc sed orci"},
        {"from": "Baker Weber", "sentAt": "1519053898", "body": "ornare tortor at risus. Nunc ac sem ut dolor dapibus gravida. Aliquam tincidunt, nunc ac mattis ornare, lectus ante dictum mi, ac mattis velit justo nec ante. Maecenas", "subject": "lorem, sit amet ultricies sem"},
        {"from": "Giacomo Guerra", "sentAt": "1466816930", "body": "at sem molestie sodales. Mauris blandit enim consequat purus. Maecenas libero est, congue a, aliquet vel, vulputate eu, odio.", "subject": "Curabitur massa. Vestibulum accumsan neque"},
        {"from": "William Gilbert", "sentAt": "1533146097", "body": "gravida sit amet, dapibus id, blandit at, nisi. Cum sociis natoque penatibus et magnis dis parturient montes,", "subject": "pharetra sed, hendrerit a, arcu."},
        {"from": "Salvador Noble", "sentAt": "1511758274", "body": "pharetra ut, pharetra sed, hendrerit a, arcu. Sed et libero. Proin mi. Aliquam gravida mauris ut mi. Duis risus odio, auctor vitae,", "subject": "viverra. Maecenas iaculis aliquet diam."},
        {"from": "Len Hardin", "sentAt": "1486911377", "body": "quam a felis ullamcorper viverra. Maecenas iaculis aliquet diam. Sed diam lorem, auctor quis, tristique ac, eleifend vitae, erat.", "subject": "Sed dictum. Proin eget odio."},
        {"from": "Kelly Hunt", "sentAt": "1522823301", "body": "ut, pharetra sed, hendrerit a, arcu. Sed et libero. Proin mi. Aliquam gravida mauris ut mi. Duis risus odio, auctor vitae, aliquet nec, imperdiet nec, leo. Morbi neque tellus,", "subject": "rutrum eu, ultrices sit amet,"},
        {"from": "Abdul Mays", "sentAt": "1461498671", "body": "neque. Sed eget lacus. Mauris non dui nec urna suscipit nonummy. Fusce fermentum fermentum arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus ornare.", "subject": "Vestibulum ante ipsum primis in"},
        {"from": "Amos Stone", "sentAt": "1528879613", "body": "risus quis diam luctus lobortis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Mauris ut quam vel sapien imperdiet ornare.", "subject": "dolor egestas rhoncus. Proin nisl"},
        {"from": "Nathan Shaw", "sentAt": "1533017568", "body": "volutpat nunc sit amet metus. Aliquam erat volutpat. Nulla facilisis. Suspendisse commodo tincidunt nibh. Phasellus nulla. Integer vulputate, risus", "subject": "dictum eu, eleifend nec, malesuada"},
        {"from": "Macaulay Hatfield", "sentAt": "1511940879", "body": "gravida. Praesent eu nulla at sem molestie sodales. Mauris blandit enim consequat purus. Maecenas libero est, congue a, aliquet vel, vulputate eu, odio.", "subject": "iaculis enim, sit amet ornare"},
        {"from": "Elmo Cash", "sentAt": "1517455499", "body": "netus et malesuada fames ac turpis egestas. Fusce aliquet magna a neque. Nullam ut nisi a odio semper cursus. Integer mollis. Integer tincidunt aliquam arcu.", "subject": "sem molestie sodales. Mauris blandit"},
        {"from": "Caesar Stanley", "sentAt": "1502723121", "body": "velit. Sed malesuada augue ut lacus. Nulla tincidunt, neque vitae semper egestas, urna justo faucibus lectus, a sollicitudin", "subject": "Aliquam erat volutpat. Nulla dignissim."},
        {"from": "Marsden Lawson", "sentAt": "1464664420", "body": "amet ultricies sem magna nec quam. Curabitur vel lectus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus", "subject": "a mi fringilla mi lacinia"},
        {"from": "Demetrius Wilcox", "sentAt": "1508994686", "body": "nisi sem semper erat, in consectetuer ipsum nunc id enim. Curabitur massa. Vestibulum accumsan neque et nunc. Quisque ornare tortor at risus. Nunc ac sem ut", "subject": "eu tempor erat neque non"},
        {"from": "Malachi Castro", "sentAt": "1500131987", "body": "Suspendisse sed dolor. Fusce mi lorem, vehicula et, rutrum eu, ultrices sit amet, risus. Donec nibh enim, gravida", "subject": "sit amet luctus vulputate, nisi"},
        {"from": "Kato Mullen", "sentAt": "1483347982", "body": "ullamcorper eu, euismod ac, fermentum vel, mauris. Integer sem elit, pharetra ut, pharetra sed, hendrerit a, arcu. Sed et libero. Proin mi. Aliquam", "subject": "cursus luctus, ipsum leo elementum"},
        {"from": "Galvin Gray", "sentAt": "1472712370", "body": "neque non quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam fringilla cursus purus. Nullam scelerisque", "subject": "consectetuer adipiscing elit. Etiam laoreet,"},
        {"from": "Colton Bauer", "sentAt": "1483700570", "body": "luctus felis purus ac tellus. Suspendisse sed dolor. Fusce mi lorem, vehicula et, rutrum eu, ultrices", "subject": "sit amet orci. Ut sagittis"},
        {"from": "Kane Chapman", "sentAt": "1515054422", "body": "Phasellus elit pede, malesuada vel, venenatis vel, faucibus id, libero. Donec consectetuer mauris id sapien. Cras dolor dolor, tempus non, lacinia at, iaculis quis, pede. Praesent eu dui.", "subject": "metus vitae velit egestas lacinia."},
        {"from": "Amery Navarro", "sentAt": "1517902934", "body": "adipiscing. Mauris molestie pharetra nibh. Aliquam ornare, libero at auctor ullamcorper, nisl arcu iaculis enim, sit", "subject": "pede blandit congue. In scelerisque"},
        {"from": "Byron Keller", "sentAt": "1519646780", "body": "nonummy ut, molestie in, tempus eu, ligula. Aenean euismod mauris eu elit. Nulla facilisi. Sed neque. Sed eget lacus. Mauris non dui nec urna suscipit nonummy. Fusce fermentum fermentum arcu.", "subject": "id, erat. Etiam vestibulum massa"},
        {"from": "Deacon Faulkner", "sentAt": "1509539568", "body": "tristique pellentesque, tellus sem mollis dui, in sodales elit erat vitae risus. Duis a mi fringilla mi lacinia mattis. Integer eu lacus. Quisque imperdiet, erat nonummy ultricies ornare, elit", "subject": "amet, consectetuer adipiscing elit. Curabitur"},
        {"from": "Cooper Richards", "sentAt": "1522889747", "body": "Sed et libero. Proin mi. Aliquam gravida mauris ut mi. Duis risus odio, auctor vitae, aliquet nec, imperdiet", "subject": "lacinia vitae, sodales at, velit."},
        {"from": "Zeus Velez", "sentAt": "1493311679", "body": "Duis a mi fringilla mi lacinia mattis. Integer eu lacus. Quisque imperdiet, erat nonummy ultricies", "subject": "magna. Phasellus dolor elit, pellentesque"},
        {"from": "Cooper Guzman", "sentAt": "1476593124", "body": "elit pede, malesuada vel, venenatis vel, faucibus id, libero. Donec consectetuer mauris id sapien. Cras dolor dolor, tempus non, lacinia at, iaculis quis,", "subject": "gravida. Aliquam tincidunt, nunc ac"}
    ];
    
    
    for(let i = 0; i < list.length; i++){
        list[i].id = utilService.makeId(8);
        list[i].isRead = i<70 ? true : false;

        list[i].isStar = Math.random() < 0.2 ? true : false;
    }
    return list
}





function getEmailByID(emailId){
    return storageService.load(KEY)
        .then(emails => {
            return emails.find(email => email.id === emailId);
        })
}


function deleteEmail(emailId) {
    return storageService.load(KEY)
        .then(emails => {
            var emailIdx = emails.findIndex(email => email.id === emailId);
            emails.splice(emailIdx, 1);
            return storageService.store(KEY, emails);
        })
}

function nextEmail(emailId) {
    return storageService.load(KEY)
        .then(emails => {
            var emailIdx = emails.findIndex(email => email.id === emailId);
            var email = (emails[emailIdx+1])? emails[emailIdx+1] : emails[0]
            return email
        })
  }
  function prevEmail(emailId) {
    return storageService.load(KEY)
        .then(emails => {
            var emailIdx = emails.findIndex(email => email.id === emailId);
            var email = (emails[emailIdx-1])? emails[emailIdx-1] : emails[emails.length-1]
            return email
        })
  }
function readMail(emailId){
    return storageService.load(KEY)
        .then(emails => {
            var currEmail = emails.find(email => email.id === emailId);
            currEmail.isRead = true
            return storageService.store(KEY, emails);
        })
}
function unReadMail(emailId){
    return storageService.load(KEY)
        .then(emails => {
            var currEmail = emails.find(email => email.id === emailId);
            currEmail.isRead = false
            return storageService.store(KEY, emails);
        })
}

function starEmail(emailId){
    return storageService.load(KEY)
        .then(emails => {
            var currEmail = emails.find(email => email.id === emailId);
            currEmail.isStar = !currEmail.isStar
            return storageService.store(KEY, emails);
        })
}
function sendEmail(newEmail){
    return storageService.load(KEY)
        .then(emails => {
            newEmail.id = utilService.makeId(8);
            newEmail.sentAt = Math.round((new Date()).getTime() / 1000);
            newEmail.isRead = false;
            newEmail.isStar = false,
            emails.unshift(newEmail)
            return storageService.store(KEY, emails);
        })
}
function changeEmail(emailId, newEmail){
    return storageService.load(KEY)
    .then(emails => {
        let email = emails.find(email => email.id === emailId);
        email.from = newEmail.from
        email.subject = newEmail.subject
        email.body = newEmail.body
        return storageService.store(KEY, emails);
    }) 
}

export default {
    getEmailsList,
    getEmailByID,
    deleteEmail,
    sendEmail,
    readMail,
    starEmail,
    nextEmail,
    prevEmail,
    changeEmail,
    unReadMail
}

