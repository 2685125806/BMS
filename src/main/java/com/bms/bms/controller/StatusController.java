package com.bms.bms.controller;


import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.bms.bms.entity.Books;
import com.bms.bms.entity.Status;
import com.bms.bms.service.BooksService;
import com.bms.bms.service.StatusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.*;

/**
 * <p>
 *  前端控制器
 * </p>
 *
 * @author wx
 * @since 2020-05-08
 */
@RestController
@RequestMapping("/bms/status")
public class StatusController {

    @Autowired
    private StatusService statusService;

    @Autowired
    private BooksService booksService;


    @GetMapping(value = "/status")
    public ArrayList<Object> REBookList(@RequestParam Integer status,
                                        @RequestParam String userOpenid){

        ArrayList<Object> objects = new ArrayList<>();
        HashMap<String, Object> map = new HashMap<>();
        QueryWrapper<Status> wrapper = new QueryWrapper<>();
        wrapper.eq("u_openid",userOpenid).eq("status",status);
        List<Status> list = statusService.list(wrapper);
        for (Status s : list) {
            QueryWrapper<Books> queryWrapper = new QueryWrapper<>();
            queryWrapper.eq("b_isbn",s.getBIsbn());
            Books one = booksService.getOne(queryWrapper);
            objects.add(one);
        }
//        map.put("data",objects);
//        System.out.println(map);
        return  objects;
    }

    /**
     * 预约书籍
     * @param openid
     * @param isbn
     */
    @GetMapping(value = "/order")
    public void order(@RequestParam String openid,
                      @RequestParam String isbn){
        Status status = new Status();
        status.setBIsbn(isbn);
        status.setUOpenid(openid);
        status.setStatus(1);
        status.setGmtCreate(new Date(System.currentTimeMillis()));
        status.setGmtModified(new Date(System.currentTimeMillis()));
        statusService.save(status);

    }

}

