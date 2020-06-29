package com.bms.bms.controller;


import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.bms.bms.entity.Books;
import com.bms.bms.service.BooksService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * <p>
 *  前端控制器
 * </p>
 *
 * @author wx
 * @since 2020-05-08
 */
@RestController
@RequestMapping("/bms/books")
public class BooksController {
    @Autowired
    private BooksService booksService;

    //根据书名模糊查询书集合
    @GetMapping(value = "/bookList")
    public List bookList(@RequestParam String partName){
        QueryWrapper<Books> queryWrapper = new QueryWrapper<>();
        queryWrapper.like("b_name",partName);
        List<Books> booksList = booksService.list(queryWrapper);
        return booksList;
    }

    //根据isbn定位某一本书籍
    @GetMapping(value = "/book")
    public Books book(@RequestParam String isbn){
        QueryWrapper<Books> booksQueryWrapper = new QueryWrapper<>();
        booksQueryWrapper.eq("b_isbn",isbn);
        Books one = booksService.getOne(booksQueryWrapper);
        return one;
    }
}

