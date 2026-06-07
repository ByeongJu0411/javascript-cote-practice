# N과 M (1)

1부터 N까지 자연수 중에서 중복 없이 M개를 골라 만든 수열을 모두 출력하는 문제입니다.
같은 수를 두 번 못 쓰고, 순서가 다르면 다른 수열로 취급하니까 사실상 순열이라고 보면 됩니다.

## 1. 풀이

- `selected` 배열에 지금까지 고른 수들을 담는다.
- `selected.length === M` 이 되면 한 수열이 완성된 것이므로 결과에 추가.
- 1부터 N까지 `for` 로 돌면서 아직 안 고른 수만 push 하고 재귀.
- 재귀에서 빠져나오면 `selected.pop()` 으로 되돌려서 다른 경로 탐색 (백트래킹).

```js
function dfs() {
  if (selected.length === M) {
    answer.push(selected.join(" "));
    return;
  }
  for (let i = 1; i <= N; i++) {
    if (selected.includes(i)) continue;
    selected.push(i);
    dfs();
    selected.pop();
  }
}
```

1부터 N까지 오름차순으로 탐색하기 때문에 결과가 자연스럽게 **사전 순**으로 쌓입니다. 따로 정렬 안 해도 됩니다.

## 2. 오류

1차 풀이에서 `selected.push(i)` 와 `dfs()` 만 적고, 뒤에 `selected.pop()` 을 빼먹었습니다.

```js
for (let i = 1; i <= N; i++) {
  if (selected.includes(i)) continue;
  selected.push(i);
  dfs();
  // selected.pop()  ← 이걸 빠뜨림
}
```

결과:

첫 번째 수열만 출력되고 끝납니다.
원인을 따져보니, push 한 i 를 되돌리지 않으니까 `selected` 에 원소가 계속 쌓여서 결국 1~N 이 다 들어가 버리고, 그 뒤로는 `includes(i)` 가 전부 `true` 라서 어떤 i 도 push 못 합니다.

## 3. 해결

재귀에서 돌아온 직후에 `selected.pop()` 추가했습니다.

```js
selected.push(i);
dfs();
selected.pop(); // ← 추가
```

이제 한 경로를 끝내고 돌아오면 마지막에 넣은 i 가 빠지면서, 같은 자리에서 다음 i 를 시도할 수 있습니다. 예제 1~3 모두 정답을 통과했습니다.

## 4. 느낀점

- DFS 백트래킹에서 "push 와 pop 은 한 쌍" 이라는 걸 다시 새겼습니다. 들어갈 때만 챙기고 나올 때 안 챙기면, 다음 경로에 영향이 그대로 남아 결과가 망가집니다.
- `for` 를 1부터 N까지 오름차순으로 돌면 출력이 자연스럽게 사전 순이 되어서, 별도의 `sort` 가 필요 없다는 점도 처음엔 의식 못 했는데 짜고 나서 보니 깔끔했습니다.
