class PairInArray {
    findPair(A, k) {
        let i = 0, j = 1;

        while (i < A.length && j < A.length) {
            if (i != j && A[j] - A[i] == k) {
                console.log("YES");
                return 1;
            }
            else if (A[j] - A[i] < k)
                j++;
            else
                i++;
        }
        console.log('NO');
        return 0;
    }
}

let searchPair = new PairInArray();
searchPair.findPair([1, 8, 30, 40, 100, 130], 29);