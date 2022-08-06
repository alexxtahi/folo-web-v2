import { getTodayDate, dateDiff } from '../utils/functions';
// Model
class Annonce {
    constructor(json) {
        this.id = json.id ?? null;
        this.title = json.title ?? null;
        this.subtitle = json.subtitle ?? null;
        this.type = json.type ?? null;
        this.content = json.content ?? null;
        // TODO: Correct date format
        this.dateEnreg = new Date(json.date_enreg) ?? null;
        this.datePub = new Date(json.date_publication) ?? null;
        this.image = json.image ?? null;
        this.link = json.link ?? null;
        this.authorizedProfiles = json.authorized_profiles ?? null;
        this.isPublished = json.is_published ?? null;
    }
    // Methods
    static fromArray(annonceList) {
        return annonceList.map(json => new Annonce(json));
    }
    getStringDatePub() {
        return this.datePub.toLocaleDateString();
    }
    getDiffWithToday() {
        return dateDiff(this.datePub, getTodayDate(), null);
    }

};

export default Annonce;