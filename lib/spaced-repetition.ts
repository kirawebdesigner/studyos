export function updateMastery(mastery:number,score:number){const delta=score>=.8?8:score>=.5?2:-5;return Math.max(0,Math.min(100,Math.round(mastery+delta)));}
