const currentDate = '30 June 2019';
const serviceDate = '5 July 2019';
const slotFree = true;

const bikeService = new Promise(function (resolve, reject) {
    if(slotFree) {
        const bookedDetails = {
            date: currentDate,
            serviceDate: serviceDate,
        };
        resolve(bookedDetails);
    } else {
        reject(new Error('No slots available for that date'));
    }
});

async function myBikeService() {
    try {
        let bookedDetails = await bikeService;
        console.log(bookedDetails);
    }
    catch(error) {
        console.log(error.message);
    }
}

(async () => { await myBikeService(); }) ();